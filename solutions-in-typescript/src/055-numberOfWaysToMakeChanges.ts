// Time: O(n * d) | Space: O(n)
export function numberOfWaysToMakeChange(n: number, denoms: number[]) {
  const dp = new Array(n + 1).fill(0)
  dp[0] = 1

  for (const denom of denoms) {
    for (let i = 1; i < dp.length; i++) {
      if (i >= denom) {
        dp[i] += dp[i - denom]
      }
    }
  }

  return dp.pop()
}

console.log(numberOfWaysToMakeChange(6, [1, 5]))
