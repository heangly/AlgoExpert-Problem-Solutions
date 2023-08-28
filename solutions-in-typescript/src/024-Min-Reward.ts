// Time: O(N) | Space: O(N)
export function minRewards(scores: number[]) {
  const dp = new Array(scores.length).fill(1)

  for (let i = 1; i < scores.length; i++) {
    if (scores[i] > scores[i - 1]) {
      dp[i] = dp[i - 1] + 1
    }
  }

  for (let i = scores.length - 2; i >= 0; i--) {
    if (scores[i] > scores[i + 1]) {
      dp[i] = Math.max(dp[i], dp[i + 1] + 1)
    }
  }

  return dp.reduce((acc, curr) => acc + curr, 0)
}

console.log(minRewards([0, 4, 2, 1, 3]))
