function zigzagTraverse(array) {
  // Write your code here.
  const height = array.length - 1
  const width = array[0].length - 1
  const result = []
  let row = 0
  let col = 0
  let goingDown = true

  while (!isOutOfBounds(row, col, height, width)) {
    result.push(array[row][col])
    if (goingDown) {
      if (col === 0 || row === height) {
        goingDown = false
        if (row === height) {
          col++
        } else {
          row++
        }
      } else {
        row++
        col--
      }
    } else {
      if (row === 0 || col === width) {
        goingDown = true
        if (col === width) {
          row++
        } else {
          col++
        }
      } else {
        row--
        col++
      }
    }
  }
  return result
}

function isOutOfBounds(row, col, height, width) {
  return row < 0 || row > height || col < 0 || col > width
}

console.log([
  [1, 3, 4, 10],
  [2, 5, 9, 11],
  [6, 8, 12, 15],
  [7, 13, 14, 16]
])
