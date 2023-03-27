# ChatGPT API Free

[简体中文版](README-zh_CN.md) - [繁體中文版](README-zh_HK.md)

Welcome to the ChatGPT API Free project, a simple and open-source proxy API that allows you to access OpenAI's ChatGPT API for free.

**You may want to check out the [Free ChatGPT](https://github.com/ztjhz/FreeChatGPT) website!**

## News

- **2023-03-26**: It is with a heavy heart that I announce the archiving of the ChatGPTAPIFree repository. Our endeavour to provide a free API for all has reached an unsustainable financial crossroad, prompting a temporary halt in our pursuit of equal access to AI technology. Despite this setback, our commitment remains unwavering. We will continue to explore alternative methods and advocate for OpenAI to lower their API pricing and remove regional restrictions. While our progress may have slowed, our resolve to create a world where the power of AI is accessible to all is stronger than ever.
- **2023-03-14**: A kind group member sponsored this project with 400 USD, which enables the free API to run for an even longer period of time.
- **2023-03-12**: A kind group member sponsored this project with 5000 CNY (724 USD), allowing for continued free access to ChatGPT. Rate limits have been implemented to ensure the API's stability and security. You are welcome to support this project by sponsoring it or hosting your own API endpoint.
- **2023-03-04**: Check out the [Free ChatGPT](https://freechatgpt.chat/), an amazing open-source web application that allows you to interact with OpenAI's ChatGPT API for free. It is built on top of this project.

## The Open ChatGPT Initiative

In a world where technology advances at an exponential pace, where the line between man and machine grows increasingly blurred, it is the responsibility of those who have the capability to create, to ensure that the benefits of this progress are shared by all.

With this in mind, I would like to present to you the Open ChatGPT Initiative. A beacon of hope in a world where the potential of AI is limited by the barrier and the cost of entry. A free and open-source proxy API that removes the barriers to accessing the latest AI technology, and makes it available to all.

This project was born from a belief, a belief in a future where the power of artificial intelligence is not reserved for the privileged few, but available to every creator, every innovator, and every dreamer.

It is a belief that technology should serve humanity, not the other way around. A belief that access to the latest advancements should not be determined by one’s technological ability or financial resources, but by one’s creativity, imagination and ambition.

This project does not seek to revolutionise the AI industry, but to democratise it. To make the power of AI accessible to every person, regardless of their background or financial situation. To promote equality, education, and innovation.

It is my sincerest hope that this project will be a catalyst for change, a rallying point for those who believe that the benefits of AI should be shared by all. Join me in this endeavour, and let us create a future where the power of AI belongs to us all.

> If you would like to read another article with more technical details, please read [_Unleashing the Boundlessness of ChatGPT: A Public Appeal_](https://medium.com/@ayaka_45434/unleashing-the-boundlessness-of-chatgpt-a-public-appeal-f1b535a5ca05).

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

1. Obtain an OpenAI API Key from [OpenAI API Keys](https://platform.openai.com/account/api-keys).
1. Star and fork this repository on GitHub.
1. Configure your [environment variables](.env.example) correctly.
1. Deploy Docker locally or on [Google Cloud Run](https://cloud.google.com/run).
1. Setup rate limit locally or using [Google Cloud Armor](https://cloud.google.com/armor/docs/rate-limiting-overview).

## Improve this project

This project is always seeking ways to improve and welcomes feedback and contributions from its users. If you have any suggestions or ideas, please feel free to create an issue or submit a pull request on the GitHub repository.

## Sponsor me!

If you find ChatGPT API Free useful, please consider [sponsoring the author](https://github.com/sponsors/ayaka14732) on GitHub to support ongoing development and maintenance. Your support would help her maintain this project and continue to make AI technology accessible for all. Thank you for your support!

<table>
  <tr>
    <th>Ko-fi</th>
    <td><a href="https://ko-fi.com/freechatgpt"><img src="https://ko-fi.com/img/githubbutton_sm.svg" alt="Ko-fi"></a></td>
  </tr>
  <tr>
    <th>Alipay</th>
    <td><img src="https://ayaka14732.github.io/sponsor/alipay.jpg" alt="Alipay" width="150"></td>
  </tr>
  <tr>
    <th>WeChat</th>
    <td><img src="https://ayaka14732.github.io/sponsor/wechat.png" alt="WeChat" width="150"></td>
  </tr>
</table>
