/*
 * exercise_3
 * 使用 GitHub access token 來呼叫 API
 * 改用 ES6 語法改寫
 */

// 1. 比較與熟悉 ES6 語法

import fetch from 'node-fetch';
import Timer from './timer/index.js';

// 常數
const users = ['nkgokul', 'BrendanEich', 'gaearon'];

// 全域變數/函式
const getUserAPI = async (name) => {
  // TODO: 把 key 等重要資訊移到 .env file
  const clientIdAndSecret = 'Richeryuan:$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'; // 不要上傳到github，Public會暴露重要資料。
  const base64 = (text) => Buffer
    .from(text)
    .toString('base64');

  // Why 沒有 await 再 return?
  return fetch(`https://api.github.com/repos/richeryuan/day20220208`, {
    //return fetch(`https://api.github.com/users/${name}`repos(倉儲資料庫)、用戶名/倉庫名字
    method: 'GET', //
    headers: {
      // Why 有些有 ''？
      'Content-Type': 'application/x-www-form-urlencoded', //因為沒有用JSON所以沒有Body，  put 
      'Accept-Language': 'en_US', 
      'Accept': 'application/json',  //傳送方式
      'Authorization': `Basic ${base64(clientIdAndSecret)}`, //bearer= base
    },
    // 如果要用patch 需要在加BODY的內容，然後要再用轉換成JSON的指令包住大括號裡面的值(一定要大寫)
    //body JSON.stringify{
    //  'names':'修改的名字'
    //}
    // /repos/{owner}/{repo}
  });
};

const getUsers = async () => {
  const timer = new Timer();

  const results = [];
  for (const name of users) {
    const userDetails = await getUserAPI(name);
    const userDetailsJSON = await userDetails.json();
    results.push(userDetailsJSON);
  }

  console.log('time elapsed(getUsers):', timer.count());

  return results;
};

const getUsersES6 = async () => {
  const timer = new Timer();

  // Why [...users]?
  //不要在for 迴圈用await 要用.map
  const promises = [...users].map(async name => {
    const userDetails = await getUserAPI(name);

    // Why not await? await是多的。
    
    return userDetails.json();
  });
  // Q await Promise.all  為什麼前面還要再加await ?
  // 若未加陣列會呈現panding
  const results = await Promise.all(promises);

  console.log('time elapsed(getUsersES6):', timer.count());
  
  return results;
};
//非同步函式 async & async await ，async函式呼叫Promise，Promise函式 return新的函式。
(async () => {
  const result_1 = await getUsers();
  const result_2 = await getUsersES6();

  // 在我的主機上列印出來的：
  // Why 兩者數值差這麼多？
  // time elapsed(getUsers): 1.001023905992508
  // time elapsed(getUsersES6): 0.3260764250010252

  console.log('users =', result_1);
  console.log('users(es6) =', result_2);
})();
