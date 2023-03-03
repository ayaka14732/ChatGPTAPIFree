# ChatGPT API Free

Welcome to the ChatGPT API Free project, a simple and open-source proxy API that allows you to access OpenAI's ChatGPT API without the need for an API key.

## Usage

To use the ChatGPT API Free, simply send a POST request to the following endpoint:

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

You can view the full API documentation on the [OpenAI official documentation](https://platform.openai.com/docs/api-reference/chat/create) page.

## Introduction

ChatGPT is a world-renowned conversational AI model developed by OpenAI, known for generating human-like responses to various prompts and queries. With its cutting-edge capabilities, ChatGPT is a valuable asset for chatbots, virtual assistants, and other natural language processing applications.

The ChatGPT API is a powerful tool that allows developers to integrate the ChatGPT model into their own applications. However, to use this API, users need to have an OpenAI API key and pay for usage.

ChatGPT API Free believes that everyone should have access to the latest AI technology without the financial burden of paying for an API key. This open-source proxy API allows you to access the ChatGPT API without a key, promoting accessibility and innovation for all.

## What does ChatGPT API Free do?

This simple proxy API acts as a bridge between you and the OpenAI ChatGPT API. You can send requests to the ChatGPT API Free endpoint using the same format as the original API. This proxy API then forwards the request to the OpenAI API with an API key provided by this project, and the response from the OpenAI API is returned to you.

## Significance

The ChatGPT API Free project is a game-changer for the AI development community. With the proxy API, anyone can access the state-of-the-art ChatGPT model without needing a key. This accessibility fosters creativity, innovation, and collaboration among developers, and could potentially lead to groundbreaking advancements in AI technology.

Moreover, other successful projects such as [sample-user/coming-soon](https://github.com/sample-user/coming-soon) build on top of this API, showing the vast potential of this project.

## Privacy Statement

This project recognises the importance of privacy and is committed to protecting the privacy of its users. This project does not collect, record, or store any text entered by users or returned by the OpenAI server in any manner. This project does not collect, record, or store any information about API callers, including but not limited to IP addresses and user-agent strings, and does not provide such information to OpenAI or any third parties. The source code of this project is available for inspection to verify this statement.

However, the OpenAI API does retain data for 30 days in accordance with its [data usage policies](https://platform.openai.com/docs/data-usage-policies).

## Host your own instance

You can also run your own instance of the ChatGPT API Free project. Simply follow these steps:

- Fork the repository.
- Sign up for a CloudFlare account (if you don't have one already).
- Deploy the code to a CloudFlare Worker, following the instructions in the README file.
- Add your own OpenAI API key as an environment variable.
- Share your API endpoint with others.

## Improve this project

This project is always seeking ways to improve and welcomes feedback and contributions from its users. If you have any suggestions or ideas, please feel free to create an issue or submit a pull request on the GitHub repository.

## Sponsor me!

If you find ChatGPT API Free useful, please consider [sponsoring me on GitHub](https://github.com/sponsors/ayaka14732) to support ongoing development and maintenance. Your support would help me maintain this project and continue to make AI technology accessible for all. Thank you for your support!
