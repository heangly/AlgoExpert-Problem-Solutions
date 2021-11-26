function validIPAddresses(string) {
  // 3 dots in betweeen
  // 4 group of intergeer
  // each group is from [0, 255]
  // cannot have leading 0. eg-> 08
  // but 0 by itself is fine.
  // cannot re arrange order
  // max length of each group is 3

  const ans = []

  for (let i = 0; i < Math.min(string.length, 4); i++) {
    const ip = ['', '', '', '']

    ip[0] = string.slice(0, i)
    if (!isValid(ip[0])) continue

    for (let j = i + 1; j < i + Math.min(string.length - i, 4); j++) {
      ip[1] = string.slice(i, j)
      if (!isValid(ip[1])) continue

      for (let k = j + 1; k < j + Math.min(string.length - j, 4); k++) {
        ip[2] = string.slice(j, k)
        ip[3] = string.slice(k)
        if (isValid(ip[2]) && isValid(ip[3])) {
          ans.push(ip.join('.'))
        }
      }
    }
  }
  return ans
}

const isValid = (string) => {
  const num = Number(string)
  if (num > 255) return false
  return String(num).length === string.length
}

console.log(validIPAddresses('1921680'))
