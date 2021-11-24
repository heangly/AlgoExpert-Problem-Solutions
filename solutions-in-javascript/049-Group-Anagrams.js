function groupAnagrams(words) {
  const table = {}

  for (const word of words) {
    let sortedWord = word.split('').sort().join('')
    if (sortedWord in table) {
      table[sortedWord].push(word)
    } else {
      table[sortedWord] = [word]
    }
  }

  return Object.values(table)
}
