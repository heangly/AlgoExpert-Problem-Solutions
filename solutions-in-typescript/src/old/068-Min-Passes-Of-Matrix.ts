// Time: O(n * m) | Space: O(n * m)
const minimumPassesOfMatrix = (matrix: number[][]) => {
  let passes = 0
  const q: number[][] = []

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] > 0) {
        q.push([i, j])
      }
    }
  }

  const processAdjacentChildren = (i: number, j: number) => {
    if (i - 1 >= 0 && matrix[i - 1][j] < 0) {
      q.push([i - 1, j])
      matrix[i - 1][j] *= -1
    }

    if (j - 1 >= 0 && matrix[i][j - 1] < 0) {
      q.push([i, j - 1])
      matrix[i][j - 1] *= -1
    }

    if (i + 1 < matrix.length && matrix[i + 1][j] < 0) {
      q.push([i + 1, j])
      matrix[i + 1][j] *= -1
    }

    if (j + 1 < matrix[0].length && matrix[i][j + 1] < 0) {
      q.push([i, j + 1])
      matrix[i][j + 1] *= -1
    }
  }

  let idx = 0
  let passLength = q.length

  while (q.length !== idx) {
    const [i, j] = q[idx]
    processAdjacentChildren(i, j)

    if (idx === passLength - 1) {
      passLength = q.length
      passes++
    }

    idx++
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] < 0) return -1
    }
  }

  return passes - 1
}

console.log(
  minimumPassesOfMatrix([
    [0, -2, -1],
    [-5, 2, 0],
    [-6, -2, 0]
  ])
)

// console.log(
//   minimumPassesOfMatrix([
//     [0, -1, -3, 2, 0],
//     [1, -2, -5, -1, -3],
//     [3, 0, 0, -4, -1]
//   ])
// )
export {}
