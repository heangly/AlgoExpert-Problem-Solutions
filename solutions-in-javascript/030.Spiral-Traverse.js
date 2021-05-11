const spiralTraverse = (array) => {
  const ans = []
  while (array.length) {
    ans.push(...array.shift())
    for (const row of array) {
      const val = row.pop()
      if (val) ans.push(val)
      row.reverse()
    }
    array.reverse()
  }
  return ans
}

const array = [
  [1, 2, 3, 4],
  [12, 13, 14, 5],
  [11, 16, 15, 6],
  [10, 9, 8, 7]
]
console.log(spiralTraverse(array))
