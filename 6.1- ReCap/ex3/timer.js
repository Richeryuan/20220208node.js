module.exports = class Timer {
  constructor() {
    // 把starttime 放在裡面，在你new的時候就呼叫了。
    // *this 來取用 class member(properties, methods)
    this.startTime = performance.now();
  }

  count() {
    // milliseconds to seconds
    return (performance.now() - this.startTime) / 1000;
  }
}
