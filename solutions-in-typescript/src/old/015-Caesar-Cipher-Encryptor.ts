// Time: O(n) | Space: O(s) where s is the length of s to be converted
const caesarCipherEncryptor = (string: string, key: number): string => {
  const characters: string = 'abcdefghijklmnopqrstuvwxyz'
  const charCodeObject: { [key: string]: number } = {}
  const ans: string[] = []

  for (let i = 0; i < characters.length; i++) {
    charCodeObject[characters[i]] = i
  }

  for (let i = 0; i < string.length; i++) {
    const charCode = charCodeObject[string[i]]
    const idx = (charCode + key) % characters.length
    ans.push(characters[idx])
  }

  return ans.join('')
}

export {}
