function thumbUp(num) {
  return new Promise((resolve, reject) => {
    if (num <= 0) reject(new Error('Positive num requiried'));
    
    setTimeout(() => {
      let thumbs = '';
      for(let i = 0; i < num; i++) thumbs += '👍';
      resolve(thumbs);
    }, num * 1000);  
  });
}

module.exports = thumbUp;
