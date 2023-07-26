export function spiralTraverse(array: number[][]) {
  const output: number[] = []

  let startRow = 0
  let endRow = array.length - 1
  let startCol = 0
  let endCol = array[0].length - 1

  while (startRow <= endRow && startCol <= endCol) {
    // going right
    for (let col = startCol; col <= endCol; col++) {
      output.push(array[startRow][col])
    }

    // going down
    for (let row = startRow + 1; row <= endRow; row++) {
      output.push(array[row][endCol])
    }

    //going left
    for (let col = endCol - 1; col >= startCol; col--) {
      if (startRow === endRow) break
      output.push(array[endRow][col])
    }

    //going up
    for (let row = endRow - 1; row > startRow; row--) {
      if (startCol === endCol) break
      output.push(array[row][startCol])
    }
    //update col
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

console.log(spiralTraverse([[1]]))
