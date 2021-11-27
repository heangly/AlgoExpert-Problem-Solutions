function minimumCharactersForWords(words) {
  const table = {}

  for (const word of words) {
    for (const char of word) {
      table[char] = 1
    }
  }

  for (const word of words) {
    const temp = {}

    for (const char of word) {
      if (char in temp) {
        temp[char]++
        table[char] = Math.max(temp[char], table[char])
      } else {
        temp[char] = 1
      }
    }
  }

  const ans = []
  for (const key in table) {
    while (table[key] > 0) {
      ans.push(key)
      table[key]--
    }
  }

  return ans
}
