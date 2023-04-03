const validIPAddresses = (string: string): string[] => {
  const ans: string[] = []

  for (let i = 0; i < Math.min(string.length, 4); i++) {
    const current = ['', '', '', '']
    current[0] = string.slice(0, i)
    if (!isValidPart(current[0])) continue

    for (let j = i + 1; j < i + Math.min(string.length - i, 4); j++) {
      current[1] = string.slice(i, j)
      if (!isValidPart(current[1])) continue

      for (let k = j + 1; k < j + Math.min(string.length - j, 4); k++) {
        current[2] = string.slice(j, k)
        current[3] = string.slice(k)

        if (isValidPart(current[2]) && isValidPart(current[3])) {
          ans.push(current.join('.'))
        }
      }
    }
  }

  return ans
}

const isValidPart = (string: string) => {
  const stringAsInt = parseInt(string)
  if (stringAsInt > 255) return false
  return string.length === stringAsInt.toString().length
}

console.log('====================================')
console.log(validIPAddresses('1921680'))
console.log('====================================')
