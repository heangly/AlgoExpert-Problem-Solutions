const maximumSumSubmatrix = (matrix, size) => {
  const dp = new Array(matrix.length + 1)
    .fill(0)
    .map(() => new Array(matrix[0].length + 1).fill(0))
  let max = -Infinity

  for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j < dp[i].length; j++) {
      const oldNum = matrix[i - 1][j - 1]
      const left = dp[i][j - 1]
      const top = dp[i - 1][j]
      const diag = dp[i - 1][j - 1]
      dp[i][j] = oldNum + left + top - diag
    }
  }

  console.log(dp)

  for (let i = size; i < dp.length; i++) {
    for (let j = size; j < dp[i].length; j++) {
      const left = dp[i][j - size]
      const top = dp[i - size][j]
      const diag = dp[i - size][j - size]

      if (top === 0 && left === 0) {
        max = Math.max(max, dp[i][j])
      } else {
        max = Math.max(max, dp[i][j] - top - left + diag)
      }
    }
  }

  return max
}

const matrix = [
  [5, 3, -1, 5],
  [-7, 3, 7, 4],
  [12, 8, 0, 0],
  [1, -8, -8, 2]
]
console.log(maximumSumSubmatrix(matrix, 2))
