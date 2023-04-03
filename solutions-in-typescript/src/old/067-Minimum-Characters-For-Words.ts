// Time: O(l * n) | Space: O(u) where l is the length of words, n is lenthg of each word, and u is length of unique char
const minimumCharactersForWords = (words: string[]): string[] => {
  const ans: string[] = []
  const table: { [key: string]: number } = {}

  for (const word of words) {
    const occurance: { [key: string]: number } = {}
    for (const char of word) {
      occurance[char] = (occurance[char] || 0) + 1
      table[char] = Math.max(table[char] || 0, occurance[char])
    }
  }

  for (const key in table) {
    for (let i = 0; i < table[key]; i++) {
      ans.push(key)
    }
  }

  return ans
}

console.log(
  minimumCharactersForWords(['this', 'that', 'did', 'deed', 'them!', 'a'])
)
