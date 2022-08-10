class MinMaxStack {
  stack: number[]
  min: number[]
  max: number[]

  constructor() {
    this.stack = []
    this.min = [Infinity]
    this.max = [-Infinity]
  }

  // Time: O(1) | Space: O(1)
  push(value: number) {
    this.stack.push(value)
    if (value <= this.min[this.min.length - 1]) this.min.push(value)
    if (value >= this.max[this.max.length - 1]) this.max.push(value)
  }

  // Time: O(1) | Space: O(1)
  pop(): number {
    const poppedValue = this.peek()
    if (poppedValue === this.min[this.min.length - 1]) this.min.pop()
    if (poppedValue === this.max[this.max.length - 1]) this.max.pop()
    return this.stack.pop()!
  }

  // Time: O(1) | Space: O(1)
  peek(): number {
    return this.stack[this.stack.length - 1]
  }

  // Time: O(1) | Space: O(1)
  getMin(): number {
    return this.min[this.min.length - 1]
  }

  // Time: O(1) | Space: O(1)
  getMax(): number {
    return this.max[this.max.length - 1]
  }
}

export {}
