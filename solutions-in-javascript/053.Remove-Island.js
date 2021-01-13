function removeIslands(matrix) {
  // Write your code here.
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      const rowIsBorder = row === 0 || row === matrix.length - 1;
      const colIsBorder = col === 0 || col === matrix[row].length - 1;
      const isBorder = rowIsBorder || colIsBorder;
      if (!isBorder) continue;
      if (matrix[row][col] != 1) continue;

      changeOnes(matrix, row, col);
    }
  }

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      const color = matrix[row][col];
      if (color === 1) {
        matrix[row][col] = 0;
      } else if (color === 2) {
        matrix[row][col] = 1;
      }
    }
  }
  return matrix;
}

function changeOnes(matrix, startRow, startCol) {
  const stack = [[startRow, startCol]];
  while (stack.length > 0) {
    const currentPosition = stack.pop();
    const [currentRow, currentCol] = currentPosition;

    matrix[currentRow][currentCol] = 2;

    const neighbors = getNeighbor(matrix, currentRow, currentCol);
    for (const n of neighbors) {
      const [row, col] = n;

      if (matrix[row][col] != 1) continue;
      stack.push(n);
    }
  }
}

function getNeighbor(matrix, row, col) {
  const n = [];

  const numRows = matrix.length;
  const numCols = matrix[row].length;

  if (row - 1 >= 0) n.push([row - 1, col]);
  if (row + 1 < numRows) n.push([row + 1, col]);
  if (col - 1 >= 0) n.push([row, col - 1]);
  if (col + 1 < numCols) n.push([row, col + 1]);
  return n;
}
const matrix = [
  [1, 0, 0, 0, 0, 0],
  [0, 1, 0, 1, 1, 1],
  [0, 0, 1, 0, 1, 0],
  [1, 1, 0, 0, 1, 0],
  [1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 1],
];

console.log(removeIslands(matrix));
