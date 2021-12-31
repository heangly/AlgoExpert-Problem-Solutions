function minimumPassesOfMatrix(matrix) {
  const passes = convertNegatives(matrix)
  return !containsNegative(matrix) ? passes - 1 : -1
}

const convertNegatives = (matrix) => {
  let nextPassQ = getAllPos(matrix)
  let pass = 0

  while (nextPassQ.length > 0) {
    const currPassQ = nextPassQ
    nextPassQ = []
    while (currPassQ.length > 0) {
      const [currRow, currCol] = currPassQ.shift()
      const adjPos = getAdjPos(currRow, currCol, matrix)
      for (const pos of adjPos) {
        const [row, col] = pos

        const value = matrix[row][col]
        if (value < 0) {
          matrix[row][col] *= -1
          nextPassQ.push([row, col])
        }
      }
    }
    pass++
  }
  return pass
}

const getAllPos = (matrix) => {
  const positivePos = []
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      const value = matrix[row][col]
      if (value > 0) positivePos.push([row, col])
    }
  }
  return positivePos
}

const getAdjPos = (row, col, matrix) => {
  const adj = []
  if (row > 0) adj.push([row - 1, col])
  if (row < matrix.length - 1) adj.push([row + 1, col])
  if (col > 0) adj.push([row, col - 1])
  if (col < matrix[0].lenght - 1) adj.push([row, col + 1])
  return adj
}

const containsNegative = (matrix) => {
  for (const row of matrix) {
    for (const value of row) {
      if (value < 0) return true
    }
  }
  return false
}

const arr = [
  [0, -1, -3, 2, 0],
  [1, -2, -5, -1, -3],
  [3, 0, 0, -4, -1]
]
console.log(minimumPassesOfMatrix(arr))
