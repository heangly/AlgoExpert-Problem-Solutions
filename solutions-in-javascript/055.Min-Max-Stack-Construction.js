// Feel free to add new properties and methods to the class.
class MinMaxStack {
  constructor() {
    this.stack = []
  }

  // O(1) time | O(1) space
  peek() {
    return this.stack[this.stack.length - 1]
  }

  // O(1) time | O(1) space
  pop() {
    // Write your code here.
    return this.stack.pop()
  }

  // O(1) time | O(1) space
  push(number) {
    // Write your code here.
    this.stack.push(number)
  }

  // O(1) time | O(1) space
  getMin() {
    // Write your code here.
    return Math.min(...this.stack)
  }

  // O(1) time | O(1) space
  getMax() {
    // Write your code here.
    return Math.max(...this.stack)
  }
}
