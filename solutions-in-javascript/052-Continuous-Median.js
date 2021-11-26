class ContinuousMedianHandler {
  constructor() {
    // Write your code here.
    this.median = null
    this.array = []
  }

  insert(number) {
    this.array.push(number)
    this.array.sort((a, b) => a - b)

    let idx = Math.floor(this.array.length / 2)
    if (this.array.length % 2 === 0) {
      this.median = (this.array[idx - 1] + this.array[idx]) / 2
    } else {
      this.median = this.array[idx]
    }
  }

  getMedian() {
    return this.median
  }
}
