function removeIslands(matrix) {
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      const rowIsBorder = row === 0 || row === matrix.length - 1
      const colIsBorder = col === 0 || col === matrix[row].length - 1
      const isBorder = rowIsBorder || colIsBorder
      if (!isBorder) continue
      if (matrix[row][col] !== 1) continue
      dfs(matrix, row, col)
    }
  }

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      const color = matrix[row][col]
      if (color === 1) {
        matrix[row][col] = 0
      } else if (color === 2) {
        matrix[row][col] = 1
      }
    }
  }

  return matrix
}

const dfs = (matrix, r, c) => {
  const stack = [[r, c]]
  while (stack.length > 0) {
    const currPos = stack.pop()
    const [currRow, currCol] = currPos
    matrix[currRow][currCol] = 2

    const ne = getN(matrix, currRow, currCol)
    for (const n of ne) {
      const [row, col] = n
      if (matrix[row][col] !== 1) continue
      stack.push(n)
    }
  }
}

const getN = (matrix, row, col) => {
  const n = []
  const numRows = matrix.length
  const numCols = matrix[row].length

  if (row - 1 >= 0) n.push([row - 1, col])
  if (row + 1 < numRows) n.push([row + 1, col])
  if (col - 1 >= 0) n.push([row, col - 1])
  if (col + 1 < numCols) n.push([row, col + 1])

  return n
}
