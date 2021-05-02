// Time: O(n) | Space: O(n)
const runLengthEncoding = (string) => {
  const ans = []
  let count = 1
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i + 1] && count < 9) {
      count++
    } else {
      ans.push(count + string[i])
      count = 1
    }
  }
  return ans.join('')
}

console.log(runLengthEncoding('AAAAAAAAAAAAABBCCCCDD'))
