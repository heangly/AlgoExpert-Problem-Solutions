function mergeOverlappingIntervals(array) {
  if (array.length === 1) return array

  array.sort((a, b) => a[0] - b[0])

  for (let i = 1; i < array.length; i++) {
    //merge
    if (array[i][0] <= array[i - 1][1]) {
      array[i] = [array[i - 1][0], Math.max(array[i][1], array[i - 1][1])]
      array[i - 1] = [null, null]
    }
  }

  return array.filter((arr) => arr[0] !== null)
}

console.log(
  mergeOverlappingIntervals([
    [1, 2],
    [3, 5],
    [4, 7],
    [6, 8],
    [9, 10]
  ])
)
