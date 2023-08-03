export function mergeOverlappingIntervals(array: number[][]) {
  array.sort((a, b) => a[0] - b[0])

  let i = 0
  while (i < array.length - 1) {
    while (i < array.length - 1 && array[i][1] >= array[i + 1][0]) {
      array[i + 1] = [array[i][0], Math.max(array[i][1], array[i + 1][1])]
      array[i] = [Infinity, Infinity]
      i++
    }
    i++
  }

  return array.filter((interval) => interval[0] !== Infinity)
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
