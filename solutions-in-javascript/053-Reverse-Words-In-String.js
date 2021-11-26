function reverseWordsInString(string) {
  const stack = []
  let p1 = 0
  let p2 = 0

  while (p2 < string.length) {
    if (string[p2] === ' ') {
      stack.push(string.slice(p1, p2))
      p1 = p2
      p2++

      while (string[p2] === ' ') {
        p2++
      }
      stack.push(string.slice(p1, p2))
      p1 = p2
    } else {
      p2++
    }
  }

  stack.push(string.slice(p1, p2 + 1))

  const ans = []
  while (stack.length) {
    ans.push(stack.pop())
  }

  return ans.join('')
}
