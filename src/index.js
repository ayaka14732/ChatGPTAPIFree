import * as dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import fetch from 'node-fetch';

const port = parseInt(process.env.PORT || '8080', 10);
const api_keys = JSON.parse(process.env.API_KEYS);
const upstreamUrl = 'https://api.openai.com/v1/chat/completions';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, HEAD, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

const randomChoice = (arr) => arr[Math.floor(Math.random() * arr.length)];

const obfuscateOpenAIResponse = (text) => text.replace(/\borg-[a-zA-Z0-9]{24}\b/g, 'org-************************').replace(' Please add a payment method to your account to increase your rate limit. Visit https://platform.openai.com/account/billing to add a payment method.', '');

const app = express();
app.disable('etag');
app.disable('x-powered-by');
app.use(express.json());

app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return res.status(400).set(corsHeaders).type('text/plain').send(err.message);
  }
  next();
});

const handleOptions = (req, res) => {
  res.setHeader('Access-Control-Max-Age', '1728000').set(corsHeaders).sendStatus(204);
};

const handlePost = async (req, res) => {
  const contentType = req.headers['content-type'];
  if (!contentType || contentType !== 'application/json') {
    return res.status(415).set(corsHeaders).type('text/plain').send("Unsupported media type. Use 'application/json' content type");
  }

  const { stream } = req.body;
  if (stream != null && stream !== true && stream !== false) {
    return res.status(400).set(corsHeaders).type('text/plain').send('The `stream` parameter must be a boolean value');
  }

  try {
    const authHeader = req.get('Authorization');
    const authHeaderUpstream = authHeader || `Bearer ${randomChoice(api_keys)}`;

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
      return res.status(status).set(corsHeaders).type('text/plain').send(`OpenAI API responded:\n\n${textObfuscated}`);
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
    res.set({
      ...corsHeaders,
      'Cache-Control': 'no-cache',
    });

    resUpstream.body.pipe(res);
  } catch (error) {
    res.status(500).set(corsHeaders).type('text/plain').send(error.message);
  }
};

app.options('/v1/', handleOptions);
app.post('/v1/', handlePost);
app.options('/v1/chat/completions', handleOptions);
app.post('/v1/chat/completions', handlePost);

app.use('*', (req, res) => {
  res.status(404).set(corsHeaders).type('text/plain').send('Not found');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
