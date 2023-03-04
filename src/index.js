import moment from 'moment';

const UPSTREAM_URL = 'https://api.openai.com/v1/chat/completions';
const MAX_REQUESTS = 1024; // maximum number of requests per IP address per hour

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, HEAD, POST, PUT, PATCH, DELETE, OPTIONS, BREW',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

const STREAM_HEADERS = {
  'Content-Type': 'text/event-stream',
  'Connection': 'keep-alive',
};

// Define an async function that hashes a string with SHA-256
const sha256 = async (message) => {
  const data = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
};

const randomChoice = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Define an async function that hashes user IP address, UTC year, month, day, day of the week, hour and the secret key
//
// To implement IP-based rate limiting, we have to store users' IP addresses in a certain way. However, we want to protect
// users' privacy as much as possible. To achieve this, we use SHA-256 to calculate a digest value of the user's IP address
// along with the UTC year, month, day, day of the week, hour, and the secret key. The resulting digest not only depends on
// the user's IP address but is also unique to each hour, making the user's IP address hard to be determined. Moreover, the
// one-way nature of the SHA-256 algorithm implies that even if the digest value is compromised, it is almost impossible to
// reverse it to obtain the original IP address, ensuring the privacy and security of the user's identity.
const hashIp = (ip, utcNow, secret_key) => sha256(`${utcNow.format('ddd=DD.MM-HH+YYYY')}-${ip}:${secret_key}`);

const handleRequest = async (request, env) => {
  let requestBody;
  try {
    requestBody = await request.json();
  } catch (error) {
    return new Response('Malformed JSON', { status: 422, header: CORS_HEADERS });
  }

  const { stream } = requestBody;
  if (stream != null && stream !== true && stream !== false) {
    return new Response('The `stream` parameter must be a boolean value', { status: 400, header: CORS_HEADERS });
  }

  try {
    // Enforce the rate limit based on hashed client IP address
    const utcNow = moment.utc();
    const clientIp = request.headers.get('CF-Connecting-IP');
    const clientIpHash = await hashIp(clientIp, utcNow, env.SECRET_KEY);
    const rateLimitKey = `rate_limit_${clientIpHash}`;
    const rateLimitData = (await env.kv.get(rateLimitKey, { type: 'json' })) || {};
    const { rateLimitCount = 0, rateLimitExpiration = utcNow.startOf('hour').add(1, 'hour').unix() } = rateLimitData;
    if (rateLimitCount > MAX_REQUESTS) {
      return new Response('Too many requests', { status: 429, header: CORS_HEADERS });
    }

    // Forward a POST request to the upstream URL and return the response
    const api_key = randomChoice(JSON.parse(env.API_KEYS));
    const upstreamResponse = await fetch(UPSTREAM_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${api_key}`,
        'User-Agent': 'curl/7.64.1',
      },
      body: JSON.stringify(requestBody),
    });

    if (!upstreamResponse.ok) {
      const { status } = upstreamResponse;
      const text = await upstreamResponse.text();
      return new Response(`OpenAI API responded with:\n\n${text}`, { status, header: CORS_HEADERS });
    }

    // Update the rate limit information
    const rateLimitDataNew = {
      rateLimitCount: rateLimitCount + 1,
      rateLimitExpiration,
    };
    await env.kv.put(rateLimitKey, JSON.stringify(rateLimitDataNew), { expiration: rateLimitExpiration });

    return new Response(upstreamResponse.body, {
      headers: {
        ...CORS_HEADERS,
        ...(stream && STREAM_HEADERS),
        'Cache-Control': 'no-cache',
      },
    });
  } catch (error) {
    return new Response(error.message, { status: 500, headers: CORS_HEADERS });
  }
};

export default {
  async fetch(request, env) {
    const { pathname } = new URL(request.url);
    if (pathname !== '/v1/') {
      return new Response('Not found', { status: 404, headers: CORS_HEADERS });
    }

    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          ...CORS_HEADERS,
          'Access-Control-Max-Age': '1728000',
        },
      });
    }

    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405, headers: CORS_HEADERS });
    }

    const contentType = request.headers.get('Content-Type');
    if (!contentType || contentType !== 'application/json') {
      return new Response("Unsupported media type. Use 'application/json' content type", { status: 415, headers: CORS_HEADERS });
    }

    return handleRequest(request, env);
  },
};
