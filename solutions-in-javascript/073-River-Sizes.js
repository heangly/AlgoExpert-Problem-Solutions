const riverSizes = (array) => {
  const ans = []

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] === 0) continue
      const size = traverse(array, i, j)
      ans.push(size)
    }
  }
  return ans
}

const traverse = (array, row, col) => {
  if (
    array[row][col] === 0 ||
    row >= array.length ||
    col >= array[0].length ||
    col < 0 ||
    row < 0
  )
    return 0

  array[row][col] = 0

  return (
    1 +
    traverse(array, row + 1, col) +
    traverse(array, row, col + 1) +
    traverse(array, row, col - 1) +
    traverse(array, row - 1, col)
  )
}
