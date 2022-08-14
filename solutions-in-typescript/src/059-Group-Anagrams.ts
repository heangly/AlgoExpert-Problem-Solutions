// Time: O(n * w * nlog(n)) | Space: O(n)
const groupAnagrams = (words: string[]): string[][] => {
  const table: { [key: string]: string[] } = {}

  // Time: O(n) where n is total element of words
  for (const word of words) {
    // Time: O(w * nlog(n)) where w is each word.length
    const sortedWord = word.split('').sort().join('')
    // Time: O(1)
    if (sortedWord in table) {
      table[sortedWord].push(word)
    } else {
      table[sortedWord] = [word]
    }
  }

  // Time: O(n)
  return Object.values(table)
}

console.log(
  groupAnagrams(['yo', 'act', 'flop', 'tac', 'foo', 'cat', 'oy', 'olfp'])
)

export {}
