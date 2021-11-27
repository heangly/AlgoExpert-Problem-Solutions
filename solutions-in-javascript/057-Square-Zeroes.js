function squareOfZeroes(matrix) {
  // Write your code here.
  const n = matrix.length
  for (let tr = 0; tr < n; tr++) {
    for (let lc = 0; lc < n; lc++) {
      let sqLen = 2
      while (sqLen <= n - lc && sqLen <= n - tr) {
        const br = tr + sqLen - 1
        const rc = lc + sqLen - 1
        if (isSquareOfZeroes(matrix, tr, lc, br, rc)) {
          return true
        }
        sqLen++
      }
    }
  }
  return false
}

const isSquareOfZeroes = (matrix, r1, c1, r2, c2) => {
  for (let row = r1; row < r2 + 1; row++) {
    if (matrix[row][c1] !== 0 || matrix[row][c2] !== 0) return false
  }

  for (let col = c1; col < c2 + 1; col++) {
    if (matrix[r1][col] !== 0 || matrix[r2][col] !== 0) return false
  }
  return true
}
