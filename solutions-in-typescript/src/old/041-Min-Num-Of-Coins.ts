// Time: O(d*n) | space: O(n)
const minNumberOfCoinsForChange = (n: number, denoms: number[]) => {
  if (!denoms.length) return -1

  const dp = new Array(n + 1).fill(-1)
  dp[0] = 0

  denoms.sort((a, b) => a - b)

  for (const denom of denoms) {
    for (let i = 1; i < dp.length; i++) {
      if (i < denom || i % denom !== 0) continue
      dp[i] = Math.max(dp[i], dp[i - denom] + 1)
    }
  }

  return dp[n]
}

console.log(minNumberOfCoinsForChange(9, [3, 5]))
