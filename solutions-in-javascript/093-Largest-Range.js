const largestRange = (array) => {
  array.sort((a, b) => a - b)
  const obj = {}
  let newArr = new Set()
  newArr.add(array[0])

  for (let i = 1; i < array.length; i++) {
    if (array[i] !== array[i - 1] && array[i] - 1 !== array[i - 1]) {
      obj[newArr.size] = newArr
      newArr = new Set()
    }
    newArr.add(array[i])
  }

  obj[newArr.size] = newArr

  const max = Math.max(...Object.keys(obj))
  const ans = [...obj[max]]

  return [ans[0], ans.pop()]
}

const arr = [
  -7, -7, -7, -7, 8, -8, 0, 9, 19, -1, -3, 18, 17, 2, 10, 3, 12, 5, 16, 4, 11,
  -6, 8, 7, 6, 15, 12, 12, -5, 2, 1, 6, 13, 14, -4, -2
]
console.log(largestRange(arr))
