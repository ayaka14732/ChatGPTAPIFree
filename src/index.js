import * as dotenv from 'dotenv';
dotenv.config();

import crypto from 'crypto';
import express from 'express';
import fetch from 'node-fetch';
import moment from 'moment';
import { MongoClient } from 'mongodb';

const port = parseInt(process.env.PORT || '8080', 10);
const maxRequests = parseInt(process.env.MAX_REQUESTS || '1024', 10); // maximum number of requests per IP address per hour
const api_keys = JSON.parse(process.env.API_KEYS);
const secretKey = process.env.SECRET_KEY;
const uri = process.env.MONGODB_URI;
const dbName = process.env.DB_NAME || 'chatgpt-api';
const collectionName = 'rate_limits';
const upstreamUrl = 'https://api.openai.com/v1/chat/completions';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, HEAD, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

const sha256 = (data) => crypto.createHash('sha256').update(data).digest('hex');

const randomChoice = (arr) => arr[Math.floor(Math.random() * arr.length)];

const obfuscateOpenAIResponse = (text) => text.replace(/\borg-[a-zA-Z0-9]{24}\b/g, 'org-************************').replace(' Please add a payment method to your account to increase your rate limit. Visit https://platform.openai.com/account/billing to add a payment method.', '');

const getClientIp = (req) => {
  const forwardedHeader = req.header('forwarded');
  const pattern = /for="\[?([^\]"]+)\]?"/;
  const xForwardedForHeader = req.header('x-forwarded-for');
  return forwardedHeader?.split(',').pop()?.match(pattern)?.[1] ?? xForwardedForHeader?.split(',').pop() ?? req.socket.remoteAddress;
};

// Define an async function that hashes user IP address, UTC year, month, day, day of the week, hour and the secret key
//
// To implement IP-based rate limiting, we have to store users' IP addresses in a certain way. However, we want to protect
// users' privacy as much as possible. To achieve this, we use SHA-256 to calculate a digest value of the user's IP address
// along with the UTC year, month, day, day of the week, hour, and the secret key. The resulting digest not only depends on
// the user's IP address but is also unique to each hour, making the user's IP address hard to be determined. Moreover, the
// one-way nature of the SHA-256 algorithm implies that even if the digest value is compromised, it is almost impossible to
// reverse it to obtain the original IP address, ensuring the privacy and security of the user's identity.
const hashIp = (ip, currentHour, secretKey) => sha256(`${currentHour}-${ip}:${secretKey}`);

const app = express();
app.disable('etag');
app.disable('x-powered-by');
app.use(express.json());

const client = new MongoClient(uri);
const collection = client.db(dbName).collection(collectionName);
collection.createIndex({ hash: 1 });
collection.createIndex({ expiresAt: 1 }, { expireAfterSeconds: 0 });

app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return res.status(400).send(err.message);
  }
  next();
});

app.options('/v1/', (req, res) => {
  res.setHeader('Access-Control-Max-Age', '1728000').set(corsHeaders).sendStatus(204);
});

app.post('/v1/', async (req, res) => {
  const contentType = req.headers['content-type'];
  if (!contentType || contentType !== 'application/json') {
    return res.status(415).set(corsHeaders).send("Unsupported media type. Use 'application/json' content type");
  }

  const { stream } = req.body;
  if (stream != null && stream !== true && stream !== false) {
    return res.status(400).set(corsHeaders).send('The `stream` parameter must be a boolean value');
  }

  try {
    const utcNow = moment.utc();
    const clientIp = getClientIp(req);
    const currentHour = utcNow.format('ddd=DD.MM-HH+YYYY');
    const expiresAt = utcNow.startOf('hour').add(1, 'hour');

    const authHeader = req.get('Authorization');
    const shouldRateLimit = !Boolean(authHeader);
    const authHeaderUpstream = authHeader || `Bearer ${randomChoice(api_keys)}`;
    const clientIpHash = hashIp(clientIp, currentHour, secretKey);

    let count;
    if (shouldRateLimit) {
      ({ count = 0 } = (await collection.findOne({ hash: clientIpHash })) || {});
      if (count > maxRequests) {
        return res.status(429).set(corsHeaders).send('Too many requests');
      }
    }

    const requestHeader = {
      'Content-Type': 'application/json',
      'Authorization': authHeaderUpstream,
      'User-Agent': 'curl/7.64.1',
    };
    const resUpstream = await fetch(upstreamUrl, {
      method: 'POST',
      headers: requestHeader,
      body: JSON.stringify(req.body),
    });

    if (!resUpstream.ok) {
      const { status } = resUpstream;
      const text = await resUpstream.text();
      const textObfuscated = obfuscateOpenAIResponse(text);
      return res.status(status).set(corsHeaders).send(`OpenAI API responded:\n\n${textObfuscated}`);
    }

    let result;
    if (shouldRateLimit) {
      result = await collection.findOneAndUpdate(
        { hash: clientIpHash },
        {
          $inc: { count: 1 },
          $setOnInsert: { hash: clientIpHash, expiresAt: expiresAt.toDate() },
        },
        {
          upsert: true,
          returnNewDocument: true,
        }
      );
    }

    const contentType = resUpstream.headers.get('content-type');
    if (contentType) {
      res.setHeader('Content-Type', contentType);
    }
    const contentLength = resUpstream.headers.get('content-length');
    if (contentLength) {
      res.setHeader('Content-Length', contentLength);
    }
    if (stream) {
      res.setHeader('Connection', 'keep-alive');
    }
    if (shouldRateLimit) {
      res.set({
        'RateLimit-Limit': maxRequests,
        'RateLimit-Remaining': Math.max(0, maxRequests - (result.value?.count ?? 0)),
        'RateLimit-Reset': expiresAt.unix(),
        'RateLimit-Policy': `${maxRequests};w=3600`,
      });
    }
    res.set({
      ...corsHeaders,
      'Cache-Control': 'no-cache',
    });

    resUpstream.body.pipe(res);
  } catch (error) {
    res.status(500).set(corsHeaders).send(error.message);
  }
});

app.use('*', (req, res) => {
  res.status(404).set(corsHeaders).send('Not found');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
