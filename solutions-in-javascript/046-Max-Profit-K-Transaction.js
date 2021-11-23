function maxProfitWithKTransactions(prices, k) {
  if (prices.length * 2 < k) return 0
  let dp = Array(k + 1)
    .fill(0)
    .map((_) => Array(prices.length).fill(0))

  for (let row = 1; row < dp.length; row++) {
    let maxSoFar = -Infinity
    for (let col = 1; col < dp[row].length; col++) {
      maxSoFar = Math.max(maxSoFar, dp[row - 1][col - 1] - prices[col - 1])
      dp[row][col] = Math.max(dp[row][col - 1], maxSoFar + prices[col])
    }
  }

  return dp.pop().pop()
}
