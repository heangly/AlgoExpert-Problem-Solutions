// Time: O(n + n) -> O(n) | Space: O(n)
const minRewards = (scores: number[]): number => {
  const dp = new Array(scores.length).fill(1)
  let sum = 1

  for (let i = 1; i < scores.length; i++) {
    if (scores[i] > scores[i - 1]) {
      dp[i] = dp[i - 1] + 1
      sum += dp[i]
    } else {
      sum += 1
    }
  }

  for (let i = scores.length - 2; i >= 0; i--) {
    if (scores[i] > scores[i + 1]) {
      sum -= dp[i]
      dp[i] = Math.max(dp[i], dp[i + 1] + 1)
      sum += dp[i]
    }
  }

  return sum
}

const scores = [8, 4, 2, 1, 3, 6, 7, 9, 5]

console.log('====================================')
console.log(minRewards(scores))
console.log('====================================')
