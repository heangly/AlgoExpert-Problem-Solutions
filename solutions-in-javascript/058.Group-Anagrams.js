// O( w * n * log(n)) time | O(wn) space where w is the number of words and n is the length of longest word
const groupAnagrams = (words) => {
  const obj = {}
  for (const word of words) {
    const sortedWord = word.split('').sort().join('')
    if (obj[sortedWord]) {
      obj[sortedWord].push(word)
    } else {
      obj[sortedWord] = [word]
    }
  }
  return Object.values(obj)
}

console.log(
  groupAnagrams(['yo', 'act', 'flop', 'tac', 'foo', 'cat', 'oy', 'olfp'])
)
