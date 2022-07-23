// Time: O(n) | Space: O(n)
const maxSubsetSumNoAdjacent = (array: number[]): number => {
  if (!array.length) return 0

  const dp = new Array(array.length + 1).fill(0)
  dp[1] = array[0]

  for (let i = 2; i < dp.length; i++) {
    const originalValue = array[i - 1]
    const previous2Value = dp[i - 2]
    dp[i] = Math.max(dp[i - 1], originalValue + previous2Value)
  }

  return dp.pop()
}

console.log(maxSubsetSumNoAdjacent([75, 105, 120, 75, 90, 135]))
