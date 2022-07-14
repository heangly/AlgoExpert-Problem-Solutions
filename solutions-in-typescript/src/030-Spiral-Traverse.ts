// Time: O(n) | Space: O(n)
const spiralTraverse = (array: number[][]): number[] => {
  const ans: number[] = []

  let startRow = 0
  let endRow = array.length - 1
  let startCol = 0
  let endCol = array[0].length - 1

  while (startRow <= endRow && startCol <= endCol) {
    // going right
    for (let col = startCol; col <= endCol; col++) {
      ans.push(array[startRow][col])
    }

    // going down
    for (let row = startRow + 1; row <= endRow; row++) {
      ans.push(array[row][endCol])
    }

    // going left
    for (let col = endCol - 1; col >= startCol; col--) {
      if (startRow === endRow) break
      ans.push(array[endRow][col])
    }

    // going up
    for (let row = endRow - 1; row > startRow; row--) {
      if (startCol === endCol) break
      ans.push(array[row][startCol])
    }

    // update boundaries
    startRow++
    endRow--
    startCol++
    endCol--
  }

  return ans
}

console.log(
  spiralTraverse([
    [1, 2, 3, 4],
    [12, 13, 14, 5],
    [11, 16, 15, 6],
    [10, 9, 8, 7]
  ])
)
