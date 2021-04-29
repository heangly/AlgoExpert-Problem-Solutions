// Time: O(2n) | Space: O(n)
const firstNonRepeatingCharacter = (string) => {
  const obj = {}

  for (let i = 0; i < string.length; i++) {
    obj[string[i]] = obj[string[i]] + 1 || 1
  }

  for (let i = 0; i < string.length; i++) {
    if (obj[string[i]] === 1) return i
  }

  return -1
}

console.log(firstNonRepeatingCharacter('abcdcaf'))
