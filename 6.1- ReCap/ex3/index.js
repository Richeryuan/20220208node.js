/*
 * ex3 - index.js
 * 程式碼重構
 * 1. 放入對應資料夾中管理，同時改名為 index.js
 *    Q: 為什麼可以正常載入呢？
 * 2. 將 like 改寫，用一個函式。
 *    Q: 什麼時候要把事情整合到一個函式中來做，何時不要？
 * 3. timer 用 Class 改寫
 *    Class 語法：prototype 與 new Object
 *    Q: 這裡用 class 有什麼好處？
 * 4. 根據目錄結構使用模組
 * 5. 加入 Error handling
 * 
 * 「目的」
 *  - real-world app 程式能力建立
 */
// 類別(class)需要new 才能做宣告
const like = require('./like');
const Timer = require('./timer');

async function giveLikes() {
  // 在這裡建構new
  const timer = new Timer();

  // Ｑ：發生一點小問題，like 可以給負數，假設希望僅能輸入正數，並在輸入 <= 0 時產生錯誤
  // 並要在這邊加上例外處理
  const rets = await Promise.all([
    like(1),
    like(2),
    like(3),
  ]);

  console.log(rets);
  console.log('time elapsed:', timer.count());
}

giveLikes();
