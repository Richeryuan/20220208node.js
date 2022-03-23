/*
 * ex2 - index.js
 * 將 executeAt, timeElapsed 改寫為 module
 * 將 thumbUpOne, thumbUpTwo, thumbUpThree 改寫為 module
 * 
 * 「目的」
 *  - 練習將 Module 實作在程式碼中，為撰寫 real-world app 熱身。
 */

const like = require('./like');
const timer = require('./timer');

async function giveLikes() {
  const startTime = timer.executeAt();

  // *比較一下，以下寫法跟 ex1-index2.js 功能是相同的，僅將 p1, p2, p3 省略，因為這邊不用列印出來。
  // *Promise.all 傳入為一個 Promise array
  const rets = await Promise.all([
    like.thumbUpOne(),
    like.thumbUpTwo(),
    like.thumbUpThree(),
  ]);

  console.log(rets);
  console.log('time elapsed:', timer.timeElapsed(startTime));
}

giveLikes();
