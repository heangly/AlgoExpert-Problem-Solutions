// Time: O(nlog(n)) | Space: O(1)
const minimumWaitingTime = (queries: number[]): number => {
  queries.sort((a, b) => a - b)
  let dp = 0
  let sum = 0

  for (let i = 1; i < queries.length; i++) {
    dp += queries[i - 1]
    sum += dp
  }

  return sum
}

console.log(minimumWaitingTime([3, 2, 1, 2, 6]))
