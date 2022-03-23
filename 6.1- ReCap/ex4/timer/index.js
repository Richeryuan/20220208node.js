module.exports = class Timer {
  constructor() {
    this.startTime = performance.now();
  }

  count() {
    // milliseconds to seconds
    return (performance.now() - this.startTime) / 1000;
  }
}
