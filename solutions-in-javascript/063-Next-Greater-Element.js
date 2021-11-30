function nextGreaterElement(array) {
  const result = Array(array.length).fill(-1)
  const stack = []

  for (let i = 0; i < 2 * array.length; i++) {
    const idx = i % array.length
    const currentNum = array[idx]

    while (stack.length > 0 && currentNum > array[stack[stack.length - 1]]) {
      const idxFromStack = stack.pop()
      result[idxFromStack] = currentNum
    }

    stack.push(idx)
  }
  return result
}
