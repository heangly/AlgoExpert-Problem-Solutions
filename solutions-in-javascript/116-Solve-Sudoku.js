const solveSudoku = (board) => {
  solvePartialSudoku(0, 0, board)
  return board
}

const solvePartialSudoku = (row, col, board) => {
  let currentRow = row
  let currentCol = col

  if (currentCol === board[currentRow].length) {
    currentRow++
    currentCol = 0

    if (currentRow === board.length) return true
  }

  if (board[currentRow][currentCol] === 0) {
    return tryDigitsAtPosition(currentRow, currentCol, board)
  }

  return solvePartialSudoku(currentRow, currentCol + 1, board)
}

const tryDigitsAtPosition = (row, col, board) => {
  for (let digit = 1; digit < 10; digit++) {
    if (isValidAtPosition(digit, row, col, board)) {
      board[row][col] = digit

      if (solvePartialSudoku(row, col + 1, board)) return true
    }
  }
  board[row][col] = 0
  return false
}

const isValidAtPosition = (value, row, col, board) => {
  const rowIsValid = !board[row].includes(value)
  const colIsValid = !board.map((r) => r[col]).includes(value)

  if (!rowIsValid || !colIsValid) return false

  const subgridRowStart = Math.floor(row / 3) * 3
  const subgridColStart = Math.floor(col / 3) * 3
  for (let rowIdx = 0; rowIdx < 3; rowIdx++) {
    for (let colIdx = 0; colIdx < 3; colIdx++) {
      const rowToCheck = subgridRowStart + rowIdx
      const colToCheck = subgridColStart + colIdx
      const exisitingValue = board[rowToCheck][colToCheck]

      if (exisitingValue === value) return false
    }
  }

  return true
}

console.log(
  solveSudoku([
    [7, 8, 0, 4, 0, 0, 1, 2, 0],
    [6, 0, 0, 0, 7, 5, 0, 0, 9],
    [0, 0, 0, 6, 0, 1, 0, 7, 8],
    [0, 0, 7, 0, 4, 0, 2, 6, 0],
    [0, 0, 1, 0, 5, 0, 9, 3, 0],
    [9, 0, 4, 0, 6, 0, 0, 0, 5],
    [0, 7, 0, 3, 0, 0, 0, 1, 2],
    [1, 2, 0, 0, 0, 7, 4, 0, 0],
    [0, 4, 9, 2, 0, 6, 0, 0, 7]
  ])
)
