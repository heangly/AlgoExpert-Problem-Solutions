const balancedBrackets = (string) => {
  const stacks = []
  const closeBrackets = [')', ']', '}']
  const pairBrackets = {
    '(': ')',
    '[': ']',
    '{': '}'
  }

  for (const bracket of string) {
    if (bracket in pairBrackets) {
      stacks.push(bracket)
    } else if (closeBrackets.includes(bracket)) {
      const last = stacks[stacks.length - 1]
      if (pairBrackets[last] === bracket) {
        stacks.pop()
      } else {
        return false
      }
    }
  }

  return stacks.length === 0
}

console.log(balancedBrackets('(()agwg())((()agwga()())gawgwgag)'))
