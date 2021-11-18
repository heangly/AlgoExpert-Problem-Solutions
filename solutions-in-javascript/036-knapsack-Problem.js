function knapsackProblem(items, capacity) {
  const dp = Array(items.length + 1)
    .fill(0)
    .map(() => Array(capacity + 1).fill(0))

  for (let i = 1; i < dp.length; i++) {
    const [currentValue, currentWeight] = items[i - 1]

    for (let j = 1; j < dp[i].length; j++) {
      if (currentWeight > j) {
        dp[i][j] = dp[i - 1][j]
      } else {
        dp[i][j] = Math.max(
          dp[i - 1][j],
          currentValue + dp[i - 1][j - currentWeight]
        )
      }
    }
  }
  return [dp[dp.length - 1][capacity], helper(dp, items)]
}

const helper = (dp, items) => {
  const sequence = []
  let i = dp.length - 1
  let j = dp[0].length - 1

  while (i > 0) {
    if (dp[i][j] === dp[i - 1][j]) {
      i--
    } else {
      sequence.push(i - 1)
      j -= items[i - 1][1]
      i--
    }

    if (j === 0) break
  }
  return sequence
}
