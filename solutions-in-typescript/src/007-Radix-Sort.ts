const radixSort = (array: number[]): number[] => {
  if (!array.length) return array
  const maxNumber = Math.max(...array)
  let digit = 0
  while (maxNumber / 10 ** digit > 0) {
    countingSort(array, digit)
    digit++
  }
  return array
}

const countingSort = (array: number[], digit: number) => {
  const sortedArray = new Array(array.length).fill(0)
  const countArray = new Array(10).fill(0)

  const digitColumn = 10 ** digit
  for (const num of array) {
    const countIndex = Math.floor(num / digitColumn) % 10
    countArray[countIndex]++
  }

  for (let idx = 1; idx < 10; idx++) {
    countArray[idx] += countArray[idx - 1]
  }

  for (let idx = array.length - 1; idx > -1; idx--) {
    const countIdx = Math.floor(array[idx] / digitColumn) % 10
    countArray[countIdx]--
    const sortedIdx = countArray[countIdx]
    sortedArray[sortedIdx] = array[idx]
  }

  for (let idx = 0; idx < array.length; idx++) {
    array[idx] = sortedArray[idx]
  }
}

console.log(radixSort([8762, 654, 3008, 345, 87, 65, 234, 12, 2]))
export {}
