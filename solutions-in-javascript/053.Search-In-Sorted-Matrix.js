// Time: O(n + m), Space: O(1)
const searchInSortedMatrix = (matrix, target) => {
  let row = 0
  let col = matrix[row].length - 1
  while (row < matrix.length && col >= 0) {
    if (matrix[row][col] > target) {
      col--
    } else if (matrix[row][col] < target) {
      row++
    } else {
      return [row, col]
    }
  }
  return [-1, -1]
}

const matrix = [
  [1, 4, 7, 12, 15, 1000],
  [2, 5, 19, 31, 32, 1001],
  [3, 8, 24, 33, 35, 1002],
  [40, 41, 42, 44, 45, 1003],
  [99, 100, 103, 106, 128, 1004]
]
const target = 44
console.log(searchInSortedMatrix(matrix, target))
