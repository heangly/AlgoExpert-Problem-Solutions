// Time: O(n) | Space: O(1)
const firstNonRepeatingCharacter = (string: string): number => {
  const table: { [key: string]: number } = {}

  for (const str of string) {
    table[str] = (table[str] || 0) + 1
  }

  for (let i = 0; i < string.length; i++) {
    if (table[string[i]] === 1) return i
  }

  return -1
}

console.log(firstNonRepeatingCharacter('abcdcaf'))
