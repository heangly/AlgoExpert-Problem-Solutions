// Feel free to add new properties and methods to the class.
class MinMaxStack {
  constructor() {
    this.stack = [];
  }

  peek() {
    // Write your code here.
    return this.stack[this.stack.length - 1];
  }

  pop() {
    // Write your code here.
    return this.stack.pop();
  }

  push(number) {
    // Write your code here.
    this.stack.push(number);
  }

  getMin() {
    // Write your code here
    return Math.min(...this.stack);
  }

  getMax() {
    // Write your code here.
    return Math.max(...this.stack);
  }
}
