// O(n) time | O(1) space
const isValidSubsequence = (array, sequence) => {
  let seqIdx = 0

  for (const value of array) {
    if (seqIdx === sequence.length) break
    if (sequence[seqIdx] === value) seqIdx++
  }
  return seqIdx === sequence.length
}

// const isValidSubsequence = (array, sequence) => {
//   for (const numArray of array) {
//     sequence[0] === numArray && sequence.shift()
//   }
//   return sequence.length === 0
// }

const array = [5, 1, 22, 25, 6, -1, 8, 10]
const sequence = [1, 6, -1, 10]
console.log(isValidSubsequence(array, sequence))
