// Time: O(n * d) | Space: O(n)
export function minNumberOfCoinsForChange(n: number, denoms: number[]) {
  const dp = new Array(n + 1).fill(Infinity)
  dp[0] = 0

  for (const denom of denoms) {
    for (let i = 1; i < dp.length; i++) {
      if (denom > i) continue
      const previousValue = dp[i - denom] + 1
      dp[i] = Math.min(dp[i], previousValue)
    }
  }

  const output = dp[dp.length - 1]

  return output === Infinity ? -1 : output
}

console.log(minNumberOfCoinsForChange(7, [1, 5, 10]))
