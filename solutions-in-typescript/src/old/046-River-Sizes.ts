// Time: O(n*m) | Space: O(n*m)
const riverSizes = (matrix: number[][]): number[] => {
  const ans: number[] = []

  // Time: O(n*m) | Space: O(n*m)
  const dfs = (r: number, c: number, size: number = 0): number => {
    if (r >= matrix.length || r < 0 || c >= matrix[r].length || c < 0) return 0
    if (matrix[r][c] === 0) return 0
    matrix[r][c] = 0

    const bottom = dfs(r + 1, c)
    const top = dfs(r - 1, c)
    const left = dfs(r, c - 1)
    const right = dfs(r, c + 1)

    return 1 + bottom + top + left + right
  }

  // Time: O(n*m) | Space: O(1)
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col] === 0) continue
      const size = dfs(row, col, 1)
      ans.push(size)
    }
  }

  return ans
}

console.log(
  riverSizes([
    [1, 0, 0, 1, 0],
    [1, 0, 1, 0, 0],
    [0, 0, 1, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 0]
  ])
)
