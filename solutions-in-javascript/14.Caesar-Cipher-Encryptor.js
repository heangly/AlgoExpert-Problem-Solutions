const caesarCipherEncryptor = (string, key) => {
  // Write your code here.
  const alphaArray = [...'abcdefghijklmnopqrstuvwxyz']
  const ans = []
  const newKey = key % 26

  for (let i = 0; i < string.length; i++) {
    const index = alphaArray.indexOf(string[i]) + newKey
    ans.push(alphaArray[index % 26])
  }
  return ans.join('')
}

console.log(caesarCipherEncryptor('abc', 52))
