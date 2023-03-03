const UPSTREAM_URL = 'https://api.openai.com/v1/chat/completions';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,DELETE,OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  'Access-Control-Max-Age': '86400',
};

const handleRequest = async (request, env) => {
  let requestBody;
  try {
    requestBody = await request.json();
  } catch (error) {
    return new Response('Malformed JSON', { status: 422, header: CORS_HEADERS });
  }

  const { stream } = requestBody;
  if (stream != null && stream !== true) {
    return new Response('The `stream` parameter must be set to true', { status: 400, header: CORS_HEADERS });
  }

  const newBody = JSON.stringify({
    ...requestBody,
    stream: true,
  });

  try {
    const upstreamResponse = await fetch(UPSTREAM_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${env.API_KEY}`,
        'User-Agent': 'curl/7.64.1',
      },
      body: newBody,
    });

    if (!upstreamResponse.ok) {
      const { status } = upstreamResponse;
      const text = await upstreamResponse.text();
      return new Response(`OpenAI API responded with:\n\n${text}`, { status, header: CORS_HEADERS });
    }

    return new Response(upstreamResponse.body, {
      headers: {
        ...CORS_HEADERS,
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        Connection: 'keep-alive',
      },
    });
  } catch (error) {
    console.error(error);
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
      return new Response(null, { headers: CORS_HEADERS });
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
