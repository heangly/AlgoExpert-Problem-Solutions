function knapsackProblem(items, capacity) {
  const kValues = [];
  for (let i = 0; i < items.length + 1; i++) {
    const row = new Array(capacity + 1).fill(0);
    kValues.push(row);
  }

  for (let i = 1; i < items.length + 1; i++) {
    const currentWeight = items[i - 1][1];
    const currentValue = items[i - 1][0];
    for (let c = 0; c < capacity + 1; c++) {
      if (currentWeight > c) {
        kValues[i][c] = kValues[i - 1][c];
      } else {
        kValues[i][c] = Math.max(
          kValues[i - 1][c],
          kValues[i - 1][c - currentWeight] + currentValue
        );
      }
    }
  }
  return [kValues[items.length][capacity], getKItems(kValues, items)];
}

function getKItems(kValues, items) {
  const sequence = [];
  let i = kValues.length - 1;
  let c = kValues[0].length - 1;
  while (i > 0) {
    if (kValues[i][c] === kValues[i - 1][c]) {
      i--;
    } else {
      sequence.unshift(i - 1);
      c -= items[i - 1][1];
      i--;
    }
    if (c === 0) break;
  }
  return sequence;
}

console.log(
  knapsackProblem(
    [
      [1, 2],
      [4, 3],
      [5, 6],
      [6, 9],
    ],
    11
  )
);
