// Time: O(n^2) | Space: O(1)
const insertionSort = (array: number[]): number[] => {
  for (let i = 1; i < array.length; i++) {
    let j = i
    while (j > 0 && array[j] < array[j - 1]) {
      ;[array[j], array[j - 1]] = [array[j - 1], array[j]]
      j--
    }
  }

  return array
}

console.log(insertionSort([8, 5, 2, 9, 5, 6, 3]))

export {}
