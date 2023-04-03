const reverseWordsInString = (string: string) => {
  const arr: string[] = []
  let i = 0
  let startSliceIdx = 0

  while (i < string.length) {
    if (string[i] === ' ') {
      arr.push(string.slice(startSliceIdx, i))

      while (string[i] === ' ') {
        arr.push(' ')
        i++
      }

      startSliceIdx = i
    } else {
      i++
    }
  }

  arr.push(string.slice(startSliceIdx, i))

  const ans: string[] = []

  for (let i = arr.length - 1; i >= 0; i--) {
    ans.push(arr[i])
  }

  return ans.join('')
}

const string = 'AlgoExpert is the best!'
console.log(reverseWordsInString(string))
