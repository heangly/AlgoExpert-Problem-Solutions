function staircaseTraversal(height, maxSteps) {
  const dp = Array(height + 1).fill(0)
  dp[0] = 1
  dp[1] = 1

  for (let i = 2; i < height + 1; i++) {
    let step = 1
    while (step <= maxSteps && step <= i) {
      dp[i] = dp[i] + dp[i - step]
      step++
    }
  }

  return dp.pop()
}

console.log(staircaseTraversal(4, 3)) //7
