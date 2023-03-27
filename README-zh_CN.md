# 免费 ChatGPT API

欢迎来到免费 ChatGPT API 项目，这是一个简单且开源的代理 API，您可以免费访问 OpenAI 的 ChatGPT API。

**你一定也会喜欢 [Free ChatGPT](https://github.com/ztjhz/FreeChatGPT) 网站！**

## 新闻

- **2023-03-26**: 怀着沉重的心情，我宣布 ChatGPTAPIFree 储存库将被存档。我们为所有人提供免费 API 的事业已经面临财务上的不可持续困境，这使我们在追求 AI 技术平等获取方面暂时停滞。尽管遭遇这一挫折，我们的承诺依然坚定不移。我们将继续探索替代方法，并呼吁 OpenAI 降低 API 价格并取消地区限制。虽然我们的进步可能有所放缓，但我们致力于创造一个 AI 能力为所有人所用的世界的决心比以往任何时候都更为坚定。
- **2023-03-14**：热心群友赞助了本项目 400 美元，使免费 API 能维持更长时间。
- **2023-03-12**：热心群友赞助了本项目 5000 元人民币（合 724 美元），使免费 API 可以维持生命。为了确保 API 的稳定性和安全性，已经实施了速率限制。欢迎以赞助或托管自己 API 端点的方式支持本项目。
- **2023-03-04**：请查看 [Free ChatGPT](https://freechatgpt.chat/)，这是一个非常棒的开源 Web 应用，您可以免费使用 OpenAI 的 ChatGPT API。它是基于此项目构建的。

## 开放 ChatGPT 倡议

在一个技术以指数速度发展的世界里，人与机器之间的界限越来越模糊，那些有能力创造的人有责任确保所有人都能分享这种进步的好处。

考虑到这一点，我想介绍 Open ChatGPT 倡议。在一个人工智能的潜力受限于门槛和成本的世界里，这是一盏希望之灯。一个免费和开源的代理 API，消除了获取最新人工智能技术的障碍，并使其为所有人所用。

这个项目诞生于一种信念，一种对未来的信念，即人工智能的力量不是留给少数特权者的，而是提供给每一位创造者、每一位创新者和每一位梦想者。

这是一种信念，即技术应该为人类服务，而不是相反。这是一种信念，即获得最新进展的机会不应该由一个人的技术能力或财力决定，而是由一个人的创造力、想象力和抱负决定。

这个项目并不寻求变革人工智能行业，而是使其民主化。寻求每个人都能获得人工智能的力量，无论其背景或经济状况。寻求促进平等、教育和创新。

我最真诚地希望，这个项目将成为变革的催化剂，成为那些相信人工智能的好处应该由所有人分享的人的集合点。加入我的努力，让我们共同创造一个未来，一个人工智能的力量属于我们所有人的未来。

> 如果您想阅读另一篇含有更多技术细节的文章，请阅读《[释放 ChatGPT 的无限潜能：一个公开呼吁](https://medium.com/@ayaka_90553/%E9%87%8A%E6%94%BE-chatgpt-%E7%9A%84%E6%97%A0%E9%99%90%E6%BD%9C%E8%83%BD-%E4%B8%80%E4%B8%AA%E5%85%AC%E5%BC%80%E5%91%BC%E5%90%81-7195a12f05f2)》。

## 用法

要使用 ChatGPT API 免费版，只需向以下端点发送 POST 请求：

```raw
https://chatgpt-api.shn.hk/v1/
```

例如，要使用 `gpt-3.5-turbo` 模型回答 "Hello, how are you?"，请发送以下 `curl` 命令：

```sh
curl https://chatgpt-api.shn.hk/v1/ \
  -H 'Content-Type: application/json' \
  -d '{
  "model": "gpt-3.5-turbo",
  "messages": [{"role": "user", "content": "Hello, how are you?"}]
}'
```

您可以在 [OpenAI 官方文档](https://platform.openai.com/docs/api-reference/chat/create)上阅读完整的 API 文档。

## 介绍

ChatGPT 是由 OpenAI 开发的全球知名的会话 AI 模型，因生成类似人类的对各种提示和查询的回答而广受赞誉。凭借其先进的功能，ChatGPT 是聊天机器人、虚拟助手和其他自然语言处理应用程序的宝贵资产。

ChatGPT API 是一个强大的工具，允许开发人员将 ChatGPT 模型集成到自己的应用程序中。但是，要使用此 API，用户需要拥有 OpenAI API 密钥并支付使用费用。

免费 ChatGPT API 认为每个人都应该拥有访问最新人工智能技术的权利，而不必承担获取 API 密钥的经济负担。此开源代理 API 允许您在没有密钥的情况下访问 ChatGPT API，促进了对所有人的可访问性和创新。

## 免费 ChatGPT API 做什么？

这个简单的代理 API 充当您与 OpenAI ChatGPT API 之间的桥梁。您可以使用与原始 API 相同的格式向 ChatGPT API 免费版端点发送请求。该代理 API 将请求转发至 OpenAI API，使用该项目提供的 API 密钥，并将 OpenAI API 的响应返回给您。

## 重要性

免费 ChatGPT API 项目是人工智能开发社区的游戏规则改变者。通过代理 API，任何人都可以无需密钥访问最先进的 ChatGPT 模型。这种可访问性促进了开发人员之间的创造力、创新和合作，并可能导致人工智能技术的突破性进展。

此外，诸如 [Free ChatGPT](https://freechatgpt.chat/) 之类的成功项目建立在此 API 的基础上，显示了该项目的巨大潜力。

## 隐私声明

该项目高度重视隐私，致力于保护其用户的隐私。该项目不会以任何方式收集、记录或存储用户输入的任何文本或由 OpenAI 服务器返回的任何文本。该项目不会向 OpenAI 或任何第三方提供有关 API 调用者的身份的任何信息，包括但不限于 IP 地址和用户代理字符串。该项目的源代码可供检查，以验证此声明。

然而，OpenAI API 根据其[数据使用政策](https://platform.openai.com/docs/data-usage-policies)保留 30 天的数据。

## 搭建自己的实例

如果您想运行自己的 ChatGPT API 免费版实例，可以按照以下步骤轻松完成：

1. 从 [OpenAI API 密钥](https://platform.openai.com/account/api-keys)获取 OpenAI API 密钥。
1. 在 GitHub 上 Star 和 Fork 此存储库。
1. 正确配置您的[环境变量](.env.example)。
1. 在本地部署 Docker 或在 [Google Cloud Run](https://cloud.google.com/run) 上部署。
1. 在本地设置速率限制或使用 [Google Cloud Armor](https://cloud.google.com/armor/docs/rate-limiting-overview)。

## 改进此项目

该项目始终在寻找改进的方法，欢迎用户提供反馈和贡献。如果您有任何建议或想法，请随时在 GitHub 存储库中创建 Issue 或提交拉取请求。

## 赞助我！

如果您发现免费 ChatGPT API 版有用，请考虑在 GitHub 上[赞助作者](https://github.com/sponsors/ayaka14732)，以支持持续的开发和维护。您的支持将帮助她维护此项目，并继续使人工智能技术对所有人都可访问。谢谢您的支持！

<table>
  <tr>
    <th>Ko-fi</th>
    <td><a href="https://ko-fi.com/freechatgpt"><img src="https://ko-fi.com/img/githubbutton_sm.svg" alt="Ko-fi"></a></td>
  </tr>
  <tr>
    <th>支付宝</th>
    <td><img src="https://ayaka14732.github.io/sponsor/alipay.jpg" alt="支付宝" width="150"></td>
  </tr>
  <tr>
    <th>微信</th>
    <td><img src="https://ayaka14732.github.io/sponsor/wechat.png" alt="微信" width="150"></td>
  </tr>
</table>
