# Homework 3: 第一個 JavaScript 程式
本作業使用openclaw製作以及commit、push
透過給予作業內容的提示詞來進行處理。

這個專案包含了基本的 JavaScript 練習。
目前資料夾內包含：
- `hello.js`: 一個簡單的程式，用來在終端機印出 "Hello 你好"，協助確認 Node.js 環境是否正常運作。

您可以透過在終端機輸入 `node hello.js` 來執行並觀看結果。

---

## 關於 Git SSH 通道設定筆記

以下為先前紀錄的 Git 相關設定，用來確認如何配置 SSH 通道以推播 (push) 專案至 GitHub：

1. **確認遠端 URL**
   設定完成後，在 terminal 輸入：
   ```bash
   git remote -v
   ```
   確認 push 的網站。如果還是 `https` 開頭而不是 `git@github.com`，則繼續下一步。

2. **設定 SSH URL**
   若發現為 `https`，請輸入以下指令更改為剛剛 SSH 提供的網址：
   ```bash
   git remote set-url origin [剛剛SSH提供的網址]
   ```
   然後再次執行 `git remote -v` 確認。

3. **連線成功確認**
   如果顯示自己的 SSH 網址，則代表 SSH 通道完全連結，就可以開始使用 `git push` 了，而不再需要特別登入 GitHub 在這台裝置上輸入帳號密碼。
