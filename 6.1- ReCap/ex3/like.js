function thumbUp(num) {
  return new Promise((resolve, reject) => {
    if (num <= 0) reject(new Error('positive num requiried'));
    setTimeout(() => {
      let thumbs = '';
      for (let i = 0; i < num; i++) thumbs += '👍';
      resolve(thumbs);
    }, num * 1000);
  });
}

// Ｑ:比較一下 (1) 與 (2)，exports 一個物件 vs 函式的時機?
// (1)
// module.exports.thumbUp = thumbUp;

// (2)
module.exports = thumbUp;
