/*
 * ex1 - index1.js
 * 1. 一個需求產生時，如何找答案與閱讀文件。
 * 2. 透過實作熟悉程式
 * 3. 熟悉非同步處理
 * 
 * 「目的」
 *  - 充分瞭解 await 相依時之執行序與執行時程
 */

// Q:當有一個想法時，如何找答案？ e.g. 想要計時。
function executeAt() {
  // Q:performance 的用途
  return performance.now();
}

function timeElapsed(startTime) {
  // ＊參考文件：milliseconds to seconds
  // ！先乘除，後加減 -> 加上括號
  return (performance.now() - startTime) / 1000;
}

// 延遲一秒的工作，我們對應給他一個讚。
function thumbUpOne() {
  // ＊比較一下一般語法，與箭頭函式語法(ES6)：

  // 1. arrow function 語法
  // ＊reject 目前沒有用到，所以顏色必較淡
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('👍');
    }, 1000);  
  });

  // 2. 一般寫法
  // return new Promise(function(resolve, reject) {
  //   setTimeout(() => {
  //     resolve('👍');
  //   }, 1000);  
  // });
}

// 延遲二秒的工作，我們對應給他二個讚。
function thumbUpTwo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('👍👍');
    }, 2000);
  });
}

// 延遲三秒的工作，我們對應給他三個讚。
function thumbUpThree() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('👍👍👍');
    }, 3000);
  });
}

async function giveLikes() {
  // 取得開始時間
  const startTime = executeAt();

  const p1 = thumbUpOne();
  const p2 = thumbUpTwo();
  const p3 = thumbUpThree();

  console.log(p1);
  console.log(p2);
  console.log(p3);
  console.log('\n');

  // Q:時間到，總共花了幾秒鐘，為什麼？
  // const rets = await Promise.all([p1, p2, p3]);
  const rets = await Promise.race([p1, p2, p3]);
  console.log(rets);
  console.log('time elapsed:', timeElapsed(startTime));
}

giveLikes();
