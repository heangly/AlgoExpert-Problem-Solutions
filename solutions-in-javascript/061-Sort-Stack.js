function sortStack(stack) {
  if (stack.length === 0) return stack
  const top = stack.pop()
  sortStack(stack)
  insert(stack, top)
  return stack
}

const insert = (stack, value) => {
  console.log(stack, value)
  if (stack.length === 0 || stack[stack.length - 1] <= value) {
    stack.push(value)
    return
  }

  const top = stack.pop()
  insert(stack, value)
  stack.push(top)
}

console.log(sortStack([10, 0, 1]))
