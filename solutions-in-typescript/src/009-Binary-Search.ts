const binarySearch = (array: number[], target: number): number => {
  let startIdx = 0
  let endIdx = array.length - 1

  while (startIdx <= endIdx) {
    const midIdx = Math.floor((startIdx + endIdx) / 2)

    if (array[midIdx] === target) return midIdx

    if (array[midIdx] > target) {
      endIdx = midIdx - 1
    } else {
      startIdx = midIdx + 1
    }
  }

  return -1
}

console.log(binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 33))
