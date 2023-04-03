// Time: O(n) | Space: O(1)
const balancedBrackets = (string: string) => {
  const brackets: { [key: string]: string } = {
    ')': '(',
    ']': '[',
    '}': '{'
  }
  const openBrackets = new Set(['(', '[', '{'])
  const openBracketStack: string[] = []

  for (const char of string) {
    if (char in brackets) {
      if (openBracketStack[openBracketStack.length - 1] !== brackets[char])
        return false

      openBracketStack.pop()!
    } else if (openBrackets.has(char)) {
      openBracketStack.push(char)
    }
  }

  return openBracketStack.length === 0
}

console.log(balancedBrackets('([])(){}(())()()'))
export {}
