// console.log('Before');
// // const user = getUser(1);
// getUser(1, function(user) {
//     console.log('User', user);
// });
// // console.log(user);
// console.log('After');

const { resolve } = require("path/posix");

// function getUser(id, callback) {
//     setTimeout(() => {
//         console.log('Reading a user from a database...');
//         callback ({ id: id, gitHubUsername: 'mosh' });
//     }, 2000);

// }
// 只能用這兩個，名字 resolve, reject  可以只打resolve，若要打reject，兩個都要一起打
// const p = new Promise((resolve, reject) =>{
// // kick off sone async work
// //...
// setTimeout(() => {
//     // resolve(1); //pending => resolved, fulfilled
//     reject(new Error('message')); //pending => rejected
// }, 2000);


// });

// p.then(result => console.log('Result', result));
// //如果不是成功，就會到CATCH
// p.catch(err => console.log('error', err.message));

// Async and Await approach










