const staircaseTraversal = (height: number, maxSteps: number) => {
  const dp = new Array(height + 1).fill(0)
  dp[0] = 1
  dp[1] = 1

  for (let i = 2; i <= height; i++) {
    let step = 1
    while (step <= maxSteps && step <= i) {
      dp[i] = dp[i] + dp[i - step]
      step++
    }
  }
  return dp[height]
}

console.log(staircaseTraversal(4, 2))
