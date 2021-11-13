function maxSubsetSumNoAdjacent(array) {
  // Write your code here.
  if (array.length === 0) return 0
  if (array.length === 1) return array[0]

  array[1] = Math.max(array[0], array[1])

  for (let i = 2; i < array.length; i++) {
    let max = Math.max(array[i] + array[i - 2], array[i - 1])
    array[i] = max
  }

  return array.pop()
}
