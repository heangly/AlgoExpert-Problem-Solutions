const bubbleSort = (array: number[]): number[] => {
  let isSorted = false
  let end = array.length

  while (!isSorted) {
    isSorted = true

    for (let i = 0; i < end - 1; i++) {
      if (array[i] > array[i + 1]) {
        isSorted = false
        ;[array[i], array[i + 1]] = [array[i + 1], array[i]]
      }
    }
    end--
  }

  return array
}

console.log(bubbleSort([8, 5, 2, 9, 5, 6, 3]))
export {}
