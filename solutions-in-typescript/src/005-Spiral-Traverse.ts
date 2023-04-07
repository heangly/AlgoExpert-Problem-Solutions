// Time: O(N * M) | Space: O(A) where A is all flatten element in array
const spiralTraverse = (array: number[][]) => {
  const output: number[] = []
  let startRow = 0
  let endRow = array.length - 1
  let startCol = 0
  let endCol = array[0].length - 1

  while (startRow <= endRow && startCol <= endCol) {
    //going left
    for (let i = startCol; i <= endCol; i++) {
      output.push(array[startRow][i])
    }

    //going down
    for (let i = startRow + 1; i <= endRow; i++) {
      output.push(array[i][endCol])
    }

    //going right
    for (let i = endCol - 1; i >= startCol; i--) {
      if (startRow === endRow) break
      output.push(array[endRow][i])
    }

    //going up
    for (let i = endRow - 1; i > startRow; i--) {
      if (startCol === endCol) break
      output.push(array[i][startCol])
    }

    startRow++
    endRow--
    startCol++
    endCol--
  }

  return output
}

console.log(
  spiralTraverse([
    [1, 2, 3, 4],
    [12, 13, 14, 5],
    [11, 16, 15, 6],
    [10, 9, 8, 7]
  ])
)
