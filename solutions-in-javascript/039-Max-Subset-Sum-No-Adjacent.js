// Time: O(n) | Space: O(n)
const maxSubsetSumNoAdjacent = (array) => {
  if (!array.length) return 0
  if (array.length === 1) return array[0]
  const maxSum = [...array]
  maxSum[1] = Math.max(array[0], array[1])

  for (let i = 2; i < array.length; i++) {
    maxSum[i] = Math.max(maxSum[i - 1], maxSum[i - 2] + array[i])
  }
  return maxSum.pop()
}

console.log(maxSubsetSumNoAdjacent([75, 105, 120, 75, 90, 135]))
