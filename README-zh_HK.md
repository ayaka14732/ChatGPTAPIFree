# 免費 ChatGPT API

歡迎來到免費 ChatGPT API 專案，這是一個簡單且開源的代理 API，您可以免費訪問 OpenAI 的 ChatGPT API。

**你一定也會喜歡 [Free ChatGPT](https://github.com/ztjhz/FreeChatGPT) 網站！**

## 新聞

- **2023-03-26**: 懷著沉重的心情，我宣布 ChatGPTAPIFree 儲存庫將被存檔。我們為所有人提供免費 API 的事業已經面臨財務上的不可持續困境，這令我們在追求 AI 技術平等獲取方面暫時停滯。儘管遭遇這一挫折，我們的承諾依然堅定不移。我們將繼續探索替代方法，並呼籲 OpenAI 降低 API 價格並取消地區限制。雖然我們的進步可能有所放緩，但我們努力創造一個 AI 能力為所有人所用的世界的決心比以往任何時候都更為堅定。
- **2023-03-14**：热心羣友贊助了本專案 400 美元，使免費 API 能維持更長時間。
- **2023-03-12**：熱心羣友贊助了本專案 5000 元人民幣（合 724 美元），使免費 API 可以維持生命。為了確保 API 的穩定性和安全性，已經實施了速率限制。歡迎以贊助或託管自己 API 端點的方式支持本專案。
- **2023-03-04**：請查看 [Free ChatGPT](https://freechatgpt.chat/)，這是一個非常棒的開源 Web 應用，您可以免費使用 OpenAI 的 ChatGPT API。它是基於此專案構建的。

## 開放 ChatGPT 倡議

在一個技術以指數速度發展的世界裏，人與機械之間的界限越來越模糊，那些有能力創造的人有責任確保所有人都能分享這種進步的好處。

考慮到這一點，我想介紹 Open ChatGPT 倡議。在一個人工智能的潛力受限於門檻和成本的世界裏，這是一盞希望之燈。一個免費和開源的代理 API，消除了獲取最新人工智能技術的障礙，並使其為所有人所用。

這專案誕生於一種信念，一種對未來的信念，即人工智能的力量不是留給少數特權者的，而是提供給每一位創造者、每一位創新者和每一位夢想者。

這是一種信念，即技術應該為人類服務，而不是相反。這是一種信念，即獲得最新進展的機會不應該由一個人的技術能力或財力決定，而是由一個人的創造力、想象力和抱負決定。

這專案並不尋求變革人工智能行業，而是使其民主化。尋求每個人都能獲得人工智能的力量，無論其背景或經濟狀況。尋求促進平等、教育和創新。

我最真誠地希望，這專案將成為變革的催化劑，成為那些相信人工智能的好處應該由所有人分享的人的集合點。加入我的努力，讓我們共同創造一個未來，一個人工智能的力量屬於我們所有人的未來。

> 如果您想閲讀另一篇含有更多技術細節的文章，請閲讀《[釋放 ChatGPT 的無限潛能：一個公開呼籲](https://medium.com/@ayaka_90553/%E9%87%8A%E6%94%BE-chatgpt-%E7%9A%84%E6%97%A0%E9%99%90%E6%BD%9C%E8%83%BD-%E4%B8%80%E4%B8%AA%E5%85%AC%E5%BC%80%E5%91%BC%E5%90%81-7195a12f05f2)》。

## 用法

要使用 ChatGPT API 免費版，只需向以下端點傳送 POST 要求：

```raw
https://chatgpt-api.shn.hk/v1/
```

例如，要使用 `gpt-3.5-turbo` 模型回答 "Hello, how are you?"，請傳送以下 `curl` 命令：

```sh
curl https://chatgpt-api.shn.hk/v1/ \
  -H 'Content-Type: application/json' \
  -d '{
  "model": "gpt-3.5-turbo",
  "messages": [{"role": "user", "content": "Hello, how are you?"}]
}'
```

您可以在 [OpenAI 官方文檔](https://platform.openai.com/docs/api-reference/chat/create)上閲讀完整的 API 文檔。

## 介紹

ChatGPT 是由 OpenAI 開發的全球知名的會話 AI 模型，因生成類似人類的對各種提示和查詢的回答而廣受讚譽。憑藉其先進的功能，ChatGPT 是聊天機械人、虛擬助手和其他自然語言處理應用程式的寶貴資產。

ChatGPT API 是一個強大的工具，允許開發人員將 ChatGPT 模型集成到自己的應用程式中。但是，要使用此 API，用户需要擁有 OpenAI API 金鑰並支付使用費用。

免費 ChatGPT API 認為每個人都應該擁有訪問最新人工智能技術的權利，而不必承擔獲取 API 金鑰的經濟負擔。此開源代理 API 允許您在沒有金鑰的情況下訪問 ChatGPT API，促進了對所有人的可訪問性和創新。

## 免費 ChatGPT API 做什麼？

這個簡單的代理 API 充當您與 OpenAI ChatGPT API 之間的橋樑。您可以使用與原始 API 相同的格式向 ChatGPT API 免費版端點傳送要求。該代理 API 將要求轉發至 OpenAI API，使用該專案提供的 API 金鑰，並將 OpenAI API 的應答回傳給您。

## 重要性

免費 ChatGPT API 專案是人工智能開發社羣的遊戲規則改變者。透過代理 API，任何人都可以無需金鑰訪問最先進的 ChatGPT 模型。這種可訪問性促進了開發人員之間的創造力、創新和合作，並可能導致人工智能技術的突破性進展。

此外，諸如 [Free ChatGPT](https://freechatgpt.chat/) 之類的成功專案建立在此 API 的基礎上，顯示了該專案的巨大潛力。

## 私隱聲明

該專案高度重視私隱，致力於保護其用户的私隱。該專案不會以任何方式收集、記錄或存儲用户輸入的任何文本或由 OpenAI 伺服器回傳的任何文本。該專案不會向 OpenAI 或任何第三方提供有關 API 呼叫者的身分的任何信息，包括但不限於 IP 位址和用户代理字串。該專案的原始碼可供檢查，以驗證此聲明。

然而，OpenAI API 根據其[資料使用政策](https://platform.openai.com/docs/data-usage-policies)保留 30 天的資料。

## 搭建自己的實例

如果您想運行自己的 ChatGPT API 免費版實例，可以按照以下步驟輕鬆完成：

1. 從 [OpenAI API 金鑰](https://platform.openai.com/account/api-keys)獲取 OpenAI API 金鑰。
1. 在 GitHub 上 Star 和 Fork 此存儲庫。
1. 正確配置您的[環境變數](.env.example)。
1. 在本地部署 Docker 或在 [Google Cloud Run](https://cloud.google.com/run) 上部署。
1. 在本地設定速率限制或使用 [Google Cloud Armor](https://cloud.google.com/armor/docs/rate-limiting-overview)。

## 改進此專案

該專案始終在尋找改進的方法，歡迎用户提供反饋和貢獻。如果您有任何建議或想法，請隨時在 GitHub 存儲庫中建立 Issue 或提交拉取請求。

## 贊助我！

如果您發現免費 ChatGPT API 版有用，請考慮在 GitHub 上[贊助作者](https://github.com/sponsors/ayaka14732)，以支持持續的開發和維護。您的支持將幫助她維護此專案，並繼續使人工智能技術對所有人都可訪問。謝謝您的支持！

<table>
  <tr>
    <th>Ko-fi</th>
    <td><a href="https://ko-fi.com/freechatgpt"><img src="https://ko-fi.com/img/githubbutton_sm.svg" alt="Ko-fi"></a></td>
  </tr>
  <tr>
    <th>支付寶</th>
    <td><img src="https://ayaka14732.github.io/sponsor/alipay.jpg" alt="支付寶" width="150"></td>
  </tr>
  <tr>
    <th>微信</th>
    <td><img src="https://ayaka14732.github.io/sponsor/wechat.png" alt="微信" width="150"></td>
  </tr>
</table>
