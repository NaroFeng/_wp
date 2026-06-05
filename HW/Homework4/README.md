# Homework 4: JavaScript 10 大程式練習

利用Antigravity製作，透過貼上老師的AI提示詞產出js內容
包括github的commit&push

本專案 (`test.js`) 包含了 10 個由 AI 產生的 JavaScript 練習題，主要用於練習與熟悉 JavaScript 核心語法與資料結構，包含 `if`, `for`, `while`, `function`, `array`, `object`, 與 `json` 的操作。

以下是 10 個練習題的詳細功能、程式介紹以及測試結果。您可以透過在終端機執行 `node test.js` 重現這些預期的輸出結果。

---

## 練習 1：判斷奇偶數
- **使用語法**：`if`, `function`
- **功能介紹**：寫一個函數 `checkEvenOrOdd(num)`，傳入整數，透過取餘數 (`num % 2`) 的方式，回傳該數字是 "偶數" 還是 "奇數"。
- **測試結果**：
  ```
  練習 1: 偶數  /  奇數
  ```

## 練習 2：陣列求和
- **使用語法**：`for`, `array`, `function`
- **功能介紹**：寫一個函數 `sumArray(arr)`，傳入一個數字陣列，透過 `for` 迴圈遍歷陣列，將所有元素加總後回傳結果。
- **測試結果**（傳入 `[1, 2, 3, 4, 5]`）：
  ```
  練習 2: 15
  ```

## 練習 3：尋找大於目標的最小 2 的次方數
- **使用語法**：`while`, `function`
- **功能介紹**：寫一個函數 `findNextPowerOfTwo(n)`，運用 `while` 迴圈找出大於或等於 `n` 的最小 2 的次方數，展示 `while` 作為條件控制的應用。
- **測試結果**（傳入 `10` 與 `32`）：
  ```
  練習 3: 16  /  64
  ```

## 練習 4：物件屬性讀取
- **使用語法**：`object`, `function`
- **功能介紹**：寫一個函數 `introducePerson(person)`，傳入一個包含 `name` 還有 `age` 屬性的物件，透過模板字串組合出個人介紹文字。
- **測試結果**（傳入 `{ name: "小明", age: 18 }`）：
  ```
  練習 4: 大家好，我是 小明，今年 18 歲。
  ```

## 練習 5：JSON 解析與字串化
- **使用語法**：`json`, `object`, `function`
- **功能介紹**：函數 `insertActiveStatus(jsonString)` 會將傳入的 JSON 字串先透過 `JSON.parse` 轉為 JS 物件，新增一筆屬性 `isActive: true` 後，再利用 `JSON.stringify` 轉回 JSON 格式的字串並回傳。
- **測試結果**（傳入 `'{"user":"test"}'`）：
  ```
  練習 5: {"user":"test","isActive":true}
  ```

## 練習 6：陣列過濾
- **使用語法**：`for`, `if`, `array`
- **功能介紹**：寫一個函數 `filterGreaterThanTen(arr)`，透過 `for` 迴圈搭配 `if` 判斷，將陣列中大於 10 的數字另外存入一個新陣列 `push`，並回傳該陣列。
- **測試結果**（傳入 `[5, 12, 8, 130, 44]`）：
  ```
  練習 6: [ 12, 130, 44 ]
  ```

## 練習 7：字母頻率統計
- **使用語法**：`object`, `for`, `function`
- **功能介紹**：將字串傳入 `countCharacters(str)`，利用 `for` 迴圈走訪每個字母（設定跳過空白），將字母作為物件的 key，當出現過就將該屬性值 `+1`，如果沒看過就建立為 `1`，最後回傳統計好的物件。
- **測試結果**（傳入 `"hello world"`）：
  ```
  練習 7: { h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 }
  ```

## 練習 8：陣列反轉 (手動演算法版)
- **使用語法**：`while`, `array`
- **功能介紹**：挑戰不使用內建的 `reverse()` 語法，透過前後端兩個指標 (left / right) 與 `while` 迴圈在陣列內部替換元素，進而達成陣列原地反轉。
- **測試結果**（傳入 `[1, 2, 3, 4, 5]`）：
  ```
  練習 8: [ 5, 4, 3, 2, 1 ]
  ```

## 練習 9：JSON 物件陣列尋找最高分
- **使用語法**：`json`, `array`, `object`, `for`, `if`
- **功能介紹**：接收一個由學生資料清單組成的 JSON 字串，先呼叫 `JSON.parse()` 將其解析為物件陣列。接著利用 `for` 迴圈比較各項紀錄，並以 `if` 找出最高分數的學生姓名後回傳。
- **測試結果**：
  ```
  練習 9: Bob
  ```

## 練習 10：綜合挑戰 (購物車動態結帳模擬)
- **使用語法**：包含本專案所有指定語法 (`if`, `for`, `while`, `function`, `json`, `array`, `object`)
- **功能介紹**：函數 `processCart(inventoryJSON, purchaseList)` 會接收以 JSON 給予的店家當前庫存文字，以及我們要購買的物品陣列清單（包含需要買的數量）。
函數內部會運用 `for` 迴圈逐一檢查購買清單，使用 `if` 確認是否有庫存，如果可以買，會用 `while` 迴圈模擬每次將庫存件數 `-1`、購物車已拿數量 `+1` 的逐件拿取過程。最終回傳剩餘庫存狀態矩陣與我們實際買到的購物車結果對照。
- **測試結果**：
  ```javascript
  練習 10: {
    remainingInventory: { apple: 2, banana: 0, orange: 0 },
    myCart: { apple: 3, banana: 2 }
  }
  ```
