function generateDocument(characters, document) {
  if (characters.length < document.length) return false

  const freqObj = {}
  for (const char of characters) {
    freqObj[char] = (freqObj[char] || 0) + 1
  }

  for (const doc of document) {
    if (!freqObj[doc]) return false
    freqObj[doc] -= 1
  }

  return true
}
