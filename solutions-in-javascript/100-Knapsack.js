const knapsackProblem = (items, capacity) => {
  const kVales = new Array(items.length + 1)
    .fill(0)
    .map(() => new Array(capacity + 1).fill(0))

  for (let i = 1; i < items.length + 1; i++) {
    const w = items[i - 1][1]
    const v = items[i - 1][0]

    for (let c = 0; c < capacity + 1; c++) {
      if (w > c) {
        kVales[i][c] = kVales[i - 1][c]
      } else {
        kVales[i][c] = Math.max(kVales[i - 1][c], kVales[i - 1][c - w] + v)
      }
    }
  }
  return [kVales[items.length][capacity], getKItems(kVales, items)]
}

const getKItems = (kVales, items) => {
  const seq = []
  let i = kVales.length - 1
  let c = kVales[0].length - 1

  while (i > 0) {
    if (kVales[i][c] === kVales[i - 1][c]) {
      i--
    } else {
      seq.unshift(i - 1)
      c -= items[i - 1][1]
      i--
    }
    if (c === 0) break
  }
  return seq
}

const items = [
  [1, 2],
  [4, 3],
  [5, 6],
  [6, 7]
]

const capacity = 10
console.log(knapsackProblem(items, capacity))
