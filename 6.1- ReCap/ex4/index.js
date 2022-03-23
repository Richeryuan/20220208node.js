/*
 * ex4 - index.js
 * 將 ex3 加入錯誤處理
 * 
 * 「目的」
 *  - real-world app 程式能力建立
 */

const like = require('./like');
const Timer = require('./timer');

async function giveLikes() {
  const timer = new Timer();

  try {
    const rets = await Promise.all([
      like(1),
      like(2),
      like(3),
    ]);

    console.log(rets);
    console.log('time elapsed:', timer.count());
  } catch (ex) {
    console.log('ex =', ex.message);
  }
}

giveLikes();
