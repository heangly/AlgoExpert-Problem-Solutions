type Range = [number, number]

// Time: O(n + m) | Space: O(1)
const searchInSortedMatrix = (matrix: number[][], target: number): Range => {
  const ans: Range = [-1, -1]
  let row = 0
  let col = matrix[row].length - 1

  while (row < matrix.length && col >= 0) {
    const currentNum = matrix[row][col]
    if (currentNum === target) return [row, col]

    if (currentNum > target) {
      col--
    } else if (currentNum < target) {
      row++
    }
  }

  return ans
}

console.log(
  searchInSortedMatrix(
    [
      [1, 4, 7, 12, 15, 1000],
      [2, 5, 19, 31, 32, 1001],
      [3, 8, 24, 33, 35, 1002],
      [40, 41, 42, 44, 45, 1003],
      [99, 100, 103, 106, 128, 1004]
    ],
    44
  )
)

export {}
