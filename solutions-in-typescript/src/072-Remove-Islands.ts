const removeIslands = (matrix: number[][]) => {
  const memo: Record<string, boolean> = {}

  const helper = (r: number, c: number) => {
    if (
      r < 0 ||
      r >= matrix.length ||
      c < 0 ||
      c >= matrix[r].length ||
      matrix[r][c] !== 1
    )
      return

    const key = `r:${r}-c:${c}`
    if (key in memo) return

    memo[key] = true

    helper(r, c - 1)
    helper(r, c + 1)
    helper(r - 1, c)
    helper(r + 1, c)
  }

  // traverse only around the border of the matrix
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (
        i === 0 ||
        i === matrix.length - 1 ||
        j === 0 ||
        j === matrix[i].length - 1
      ) {
        helper(i, j)
      }
    }
  }

  // replace all 1s with 0s iff the idx is not in memo (the border)
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      const key = `r:${i}-c:${j}`
      if (!(key in memo) && matrix[i][j] === 1) {
        matrix[i][j] = 0
      }
    }
  }

  return matrix
}

const matrix = [
  [1, 0, 0, 0, 0, 0],
  [0, 1, 0, 1, 1, 1],
  [0, 0, 1, 0, 1, 0],
  [1, 1, 0, 0, 1, 0],
  [1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 1]
]

console.log(removeIslands(matrix))
