function longestStringChain(strings) {
  const table = {}
  strings.sort((a, b) => a.length - b.length)
  const ans = []

  for (const string of strings) {
    table[string] = { len: 1, pointTo: '' }

    for (let i = 0; i < string.length; i++) {
      let newString = string.slice(0, i) + string.slice(i + 1)

      if (newString in table && table[string].len < table[newString].len + 1) {
        table[string].len = table[newString].len + 1
        table[string].pointTo = newString
      }
    }
  }

  let max = 1
  let maxKey = ''
  for (const key in table) {
    if (max < table[key].len) {
      max = table[key].len
      maxKey = key
    }
  }

  while (maxKey in table) {
    ans.push(maxKey)
    maxKey = table[maxKey].pointTo
  }

  return ans
}

const string = [
  'abcdefg1',
  '1234c',
  'abdefg2',
  'abdfg',
  '123',
  '122',
  'bgg',
  'g',
  '1a2345',
  '12a345'
]

console.log(longestStringChain(string))
