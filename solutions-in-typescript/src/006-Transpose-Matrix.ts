// Time: O(m * n) | Space: O(m * n)
export function transposeMatrix(matrix: number[][]) {
  const arr = new Array(matrix[0].length).fill(null).map(() => [] as number[])

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      const row = j
      const value = matrix[i][j]
      arr[row].push(value)
    }
  }

  return arr
}

console.log(
  transposeMatrix([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ])
)
