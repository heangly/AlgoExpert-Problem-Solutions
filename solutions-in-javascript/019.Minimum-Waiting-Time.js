// Time: O(nlog(n)) | Space: O(1)
const minimumWaitingTime = (queries) => {
  queries.sort((a, b) => a - b)
  let total = 0
  for (let i = 0; i < queries.length; i++) {
    const queriesLeft = queries.length - (i + 1)
    total += queries[i] * queriesLeft
  }
  return total
}

//  // Time: O(n^2) | Space: O(1)
// function minimumWaitingTime(queries) {
//   // Write your code here.
//   queries.sort((a, b) => a - b)
//   let ans = 0

//   for (let i = 1; i < queries.length; i++) {
//     let sum = 0
//     let j = i
//     while (j > 0) {
//       sum += queries[j - 1]
//       j--
//     }
//     ans += sum
//   }
//   return ans
// }

console.log(minimumWaitingTime([3, 2, 1, 2, 6]))
