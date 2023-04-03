// Time: O(n) where n is the length of characters | Space: O(d)
const generateDocument = (characters: string, document: string): boolean => {
  if (characters.length < document.length) return false

  const table = new Map<string, number>()

  for (const char of characters) {
    table.set(char, (table.get(char) || 0) + 1)
  }

  for (const doc of document) {
    if (!table.has(doc) || table.get(doc)! === 0) return false
    table.set(doc, table.get(doc)! - 1)
  }

  return true
}

console.log(
  generateDocument('Bste!hetsi ogEAxpelrt x ', 'AlgoExpert is the Best!')
)
