# ChatGPT API Free

Welcome to the ChatGPT API Free project, a simple and open-source proxy API that allows you to access OpenAI's ChatGPT API for free.

## News

**2023-03-04**: Check out the [ChatGPT Free App](https://freechatgpt.chat/), an amazing open-source web application that allows you to interact with OpenAI's ChatGPT API for free. It is built on top of this project.

## Usage

To use ChatGPT API Free, simply send a POST request to the following endpoint:

```
https://chatgpt-api.shn.hk/v1/
```

For instance, to generate a response to the prompt "Hello, how are you?" using the `gpt-3.5-turbo` model, send the following `curl` command:

```sh
curl https://chatgpt-api.shn.hk/v1/ \
  -H 'Content-Type: application/json' \
  -d '{
  "model": "gpt-3.5-turbo",
  "messages": [{"role": "user", "content": "Hello, how are you?"}]
}'
```

You can view the full API documentation on the [OpenAI official documentation](https://platform.openai.com/docs/api-reference/chat/create).

## Introduction

ChatGPT is a world-renowned conversational AI model developed by OpenAI, known for generating human-like responses to various prompts and queries. With its cutting-edge capabilities, ChatGPT is a valuable asset for chatbots, virtual assistants, and other natural language processing applications.

The ChatGPT API is a powerful tool that allows developers to integrate the ChatGPT model into their own applications. However, to use this API, users need to have an OpenAI API key and pay for usage.

ChatGPT API Free believes that everyone should have access to the latest AI technology without the financial burden of paying for an API key. This open-source proxy API allows you to access the ChatGPT API without a key, promoting accessibility and innovation for all.

## What does ChatGPT API Free do?

This simple proxy API acts as a bridge between you and the OpenAI ChatGPT API. You can send requests to the ChatGPT API Free endpoint using the same format as the original API. This proxy API then forwards the request to the OpenAI API with an API key provided by this project, and the response from the OpenAI API is returned to you.

## Significance

The ChatGPT API Free project is a game-changer for the AI development community. With the proxy API, anyone can access the state-of-the-art ChatGPT model without needing a key. This accessibility fosters creativity, innovation, and collaboration among developers, and could potentially lead to groundbreaking advancements in AI technology.

Moreover, other successful projects such as [ChatGPT Free App](https://freechatgpt.chat/) build on top of this API, showing the vast potential of this project.

## Privacy Statement

This project highly values privacy and is committed to safeguarding the privacy of its users. This project does not collect, record, or store any text entered by users or returned by the OpenAI server in any manner. This project does not provide any information to OpenAI or any third parties about the identity of API callers, including but not limited to IP addresses and user-agent strings. The source code of this project is available for inspection to verify this statement.

However, the OpenAI API does retain data for 30 days in accordance with its [data usage policies](https://platform.openai.com/docs/data-usage-policies).

## Host Your Own Instance

If you'd like to run your own instance of ChatGPT API Free, you can easily do so by following these steps:

### Setup OpenAI

1. Create an OpenAI account (if you don't have one already)
1. Obtain an OpenAI API Key from [OpenAI API Keys](https://platform.openai.com/account/api-keys)

### Setup Cloudflare

1. Create a Cloudflare account (if you don't have one already)
1. Create a Cloudflare Worker named "chatgpt-api"
1. Optionally, you can add custom domains for your Cloudflare worker by following the instructions on [Build a Custom Domain](https://developers.cloudflare.com/workers/platform/triggers/custom-domains/#build-a-custom-domain)
1. In the KV page of the [Workers dashboard](https://dash.cloudflare.com/?to=/:account/workers/kv/namespaces), create a Workers KV named "chatgpi-api", then record its Workers KV ID for later use
1. In the Cloudflare Worker, add an environment variable `API_KEYS` using the dashboard, which should be a JSON list of strings that contains at least one OpenAI API Key. For more information on adding environment variables, see [Adding Environment Variables via the Dashboard](https://developers.cloudflare.com/workers/platform/environment-variables/#adding-environment-variables-via-the-dashboard)
1. In the Cloudflare Worker, add an environment variable `SECRET_KEY` using the dashboard, which should be a long-enough random string
1. Create a Cloudflare API token by following the instructions on [Create a Cloudflare API token](https://developers.cloudflare.com/workers/wrangler/ci-cd/#create-a-cloudflare-api-token)

### Setup GitHub

1. Create a GitHub account (if you don't have one already)
1. Fork this repository
1. Modify `wrangler.toml`, change the `id` in `kv_namespaces` to the Workers KV ID above
1. In your forked repository, create an encrypted secret named `CF_API_TOKEN`, which should contain your Cloudflare API token. For more information on creating encrypted secrets, see [Creating Encrypted Secrets for a Repository](https://docs.github.com/en/actions/security-guides/encrypted-secrets#creating-encrypted-secrets-for-a-repository)
1. Run the Deploy action to deploy your changes to Cloudflare
1. Wait for the action to complete and you're done! Share your API endpoint with others

## Improve this project

This project is always seeking ways to improve and welcomes feedback and contributions from its users. If you have any suggestions or ideas, please feel free to create an issue or submit a pull request on the GitHub repository.

## Sponsor me!

If you find ChatGPT API Free useful, please consider [sponsoring the author](https://github.com/sponsors/ayaka14732) on GitHub to support ongoing development and maintenance. Your support would help her maintain this project and continue to make AI technology accessible for all. Thank you for your support!
