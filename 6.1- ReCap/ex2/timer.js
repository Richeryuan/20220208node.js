function executeAt() {

    return performance.now();
  }
  
  function timeElapsed(startTime) {

    return (performance.now() - startTime) / 1000;
  }
module.exports =  { executeAt, timeElapsed };