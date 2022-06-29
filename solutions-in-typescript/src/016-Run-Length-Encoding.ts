// Time: O(n) | Space: O(n)
const runLengthEncoding = (string: string): string => {
  const ans: string[] = []
  let count = 0
  let runningString = ''

  const reset = () => {
    count = 0
    runningString = ''
  }

  for (const str of string) {
    if (str !== runningString) {
      if (runningString !== '') {
        ans.push(`${count}${runningString}`)
        reset()
      }
      runningString = str
    }

    count++

    if (count === 9) {
      ans.push(`9${runningString}`)
      reset()
    }
  }

  ans.push(`${count}${runningString}`)

  return ans.join('')
}

console.log(runLengthEncoding('AAAAAAAAAAAAABBCCCCDD'))
