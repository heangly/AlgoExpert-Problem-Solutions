function balancedBrackets(string) {
  const bracketPairs = {
    ')': '(',
    ']': '[',
    '}': '{'
  }

  const openningBrackets = new Set(['(', '{', '['])

  const stack = []

  for (const char of string) {
    // when seeing the closing bracket
    if (char in bracketPairs) {
      // when it is the matching pair
      if (stack[stack.length - 1] === bracketPairs[char]) {
        stack.pop()
      } else {
        return false
      }
    } else if (openningBrackets.has(char)) {
      // when seeing the openning bracket
      stack.push(char)
    }
  }
  return stack.length === 0
}
