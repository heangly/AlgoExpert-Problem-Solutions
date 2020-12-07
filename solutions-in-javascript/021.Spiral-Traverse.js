const spiralTraverse = (matrix) => {
  const output = [];

  while (matrix.length) {
    output.push(...matrix.shift());

    for (let i = 0; i < matrix.length; i++) {
      let val = matrix[i].pop();
      if (val) {
        output.push(val);
        matrix[i].reverse();
      }
    }
    matrix.reverse();
  }
  return output;
};

const matrix = [
  [1, 2, 3, 4],
  [12, 13, 14, 5],
  [11, 16, 15, 6],
  [10, 9, 8, 7],
];

console.log(spiralTraverse(matrix));
