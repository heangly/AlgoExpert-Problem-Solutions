const sortKSortedArray = (array, k) => {
  const ans = []
  let position = 0
  while (position < array.length) {
    let min = Infinity
    for (let i = position; i < k + 1; i++) {
      if (array[i] < min) {
        min = array[i]
      }
    }
    ans.push(min)
    position++
  }

  return ans
}

console.log(sortKSortedArray([3, 2, 1, 5, 4, 7, 6, 5], 3))
