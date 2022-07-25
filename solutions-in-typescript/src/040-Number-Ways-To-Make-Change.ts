// Time: O(n) | space: O(n)
const numberOfWaysToMakeChange = (n: number, denoms: number[]): number => {
  if (!denoms.length) return -1
  const dp = new Array(n + 1).fill(0)
  dp[0] = 1

  for (const denom of denoms) {
    for (let i = 1; i < dp.length; i++) {
      if (i < denom) continue

      const previousValue = dp[i - denom]
      dp[i] += previousValue
    }
  }

  return dp.pop()
}

console.log(numberOfWaysToMakeChange(6, [1, 5]))
