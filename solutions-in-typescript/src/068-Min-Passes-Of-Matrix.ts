const minimumPassesOfMatrix = (matrix: number[][]) => {
  const dp = new Array(matrix.length)
    .fill(0)
    .map((_) => new Array(matrix[0].length).fill(0))

  const negativeStacks: number[][] = []

  let max = -Infinity

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] < 0) {
        negativeStacks.push([i, j])
      }
    }
  }

  let seen = new Set()
  while (negativeStacks.length > 0) {
    const [i, j] = negativeStacks.shift()!
    let min = Infinity

    if (i - 1 >= 0 && matrix[i - 1][j] > 0) {
      min = Math.min(min, dp[i - 1][j])
      matrix[i][j] = Math.abs(matrix[i][j])
    }

    if (i + 1 < matrix.length && matrix[i + 1][j] > 0) {
      min = Math.min(min, dp[i + 1][j])
      matrix[i][j] = Math.abs(matrix[i][j])
    }

    if (j - 1 >= 0 && matrix[i][j - 1] > 0) {
      min = Math.min(min, dp[i][j - 1])
      matrix[i][j] = Math.abs(matrix[i][j])
    }

    if (j + 1 >= 0 && matrix[i][j + 1] > 0) {
      min = Math.min(min, dp[i][j + 1])
      matrix[i][j] = Math.abs(matrix[i][j])
    }

    if (matrix[i][j] < 0) {
      const key = `${i}-${j}`
      if (seen.has(key)) break
      seen.add(key)
      negativeStacks.push([i, j])
    } else {
      dp[i][j] = min + 1
      max = Math.max(max, dp[i][j])
    }
  }

  return negativeStacks.length !== 0 ? -1 : max
}

console.log(
  minimumPassesOfMatrix([
    [0, -2, -1],
    [-5, 2, 0],
    [-6, -2, 0]
  ])
)

// console.log(
//   minimumPassesOfMatrix([
//     [0, -1, -3, 2, 0],
//     [1, -2, -5, -1, -3],
//     [3, 0, 0, -4, -1]
//   ])
// )
export {}
