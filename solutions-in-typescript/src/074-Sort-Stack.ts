const sortStack = (stack: number[]) => {
  if (stack.length === 0) return stack
  const top = stack.pop()!
  sortStack(stack)
  insertInSortedOrder(stack, top)
  return stack
}

const insertInSortedOrder = (stack: number[], value: number) => {
  if (stack.length === 0 || stack[stack.length - 1] <= value) {
    stack.push(value)
    return
  }

  const top = stack.pop()!
  insertInSortedOrder(stack, value)
  stack.push(top)
}

console.log(sortStack([-5, 2, -2, 4, 3, 1]))
