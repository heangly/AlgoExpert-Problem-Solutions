// Time: O(n) | Space: O(1)
const kadanesAlgorithm = (array: number[]): number => {
  let runningSum = 0
  let max = -Infinity

  for (const num of array) {
    runningSum = Math.max(num, runningSum + num)
    max = Math.max(max, runningSum)
  }

  return max
}

console.log(
  kadanesAlgorithm([3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4])
)
