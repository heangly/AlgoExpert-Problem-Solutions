function firstNonRepeatingCharacter(string) {
  // Write your code here.
  let obj = {}

  for (let i = 0; i < string.length; i++) {
    obj[string[i]] = (obj[string[i]] || 0) + 1
  }

  for (let i = 0; i < string.length; i++) {
    if (obj[string[i]] === 1) return i
  }

  return -1
}
