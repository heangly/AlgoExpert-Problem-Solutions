// Time: O(2n) || Space O(n)
function generateDocument(characters, document) {
  // Write your code here.
  const charObj = {}

  for (let i = 0; i < characters.length; i++) {
    charObj[characters[i]] = charObj[characters[i]] + 1 || 1
  }

  for (let i = 0; i < document.length; i++) {
    if (!charObj[document[i]]) return false
    charObj[document[i]]--
  }

  return true
}

const characters = 'Bste!hetsi ogEAxpelrt x '
const document = 'AlgoExpert is the Best!'
console.log(generateDocument(characters, document))
