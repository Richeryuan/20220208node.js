// 非同步處理，Promise


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

  // 單一匯出 (屬性可隨便定義名稱但通常都會跟值的名稱一樣)，
  // module.exports.thumbUpOne(屬性) = thumbUpOne(值);
  // module.exports.thumbUpTwo = thumbUpTwo;
  // module.exports.thumbUpThree = thumbUpThree;

//  為什麼要這樣寫。因為git上傳資料會比較容易發現變更的狀態
//   module.exports = {
//      thumbUpOne, 
//      thumbUpTwo, 
//      thumbUpThree
//   };
// module.exports = {thumbUpOne, thumbUpTwo, thumbUpThree};
  // 一起匯出
  module.exports = {
     thumbUpOne, 
     thumbUpTwo, 
     thumbUpThree
  };