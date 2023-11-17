// Time: O(N) | Space: O(N)
export function maxSubsetSumNoAdjacent(array: number[]) {
  if (!array.length) return 0

  const dp = new Array(array.length + 1).fill(0)
  dp[1] = array[0]

  for (let i = 2; i < dp.length; i++) {
    const value = array[i - 1]
    dp[i] = Math.max(dp[i - 1], value + dp[i - 2])
  }

  return dp.pop()
}

console.log(maxSubsetSumNoAdjacent([75, 105, 120, 75, 90, 135]))
