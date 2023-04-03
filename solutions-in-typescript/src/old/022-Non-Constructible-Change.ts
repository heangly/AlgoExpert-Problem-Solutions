// Time: O(nlog(n)) | Space: O(n)
const nonConstructibleChange = (coins: number[]): number => {
  coins.sort((a, b) => a - b)
  const dp = new Array(coins.length + 1).fill(0)
  dp[0] = 1

  for (let i = 1; i < dp.length; i++) {
    const oldValue = coins[i - 1]
    if (oldValue > dp[i - 1]) return dp[i - 1]
    dp[i] = oldValue + dp[i - 1]
  }

  return dp.pop()!
}

console.log(nonConstructibleChange([5, 7, 1, 1, 2, 3, 22]))
console.log(nonConstructibleChange([1, 2, 5]))
