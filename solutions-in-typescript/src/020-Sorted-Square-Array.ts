// Time: O(n) | Space: O(n)
const sortedSquareArray = (array: number[]): number[] => {
  const ans: number[] = new Array(array.length).fill(0)
  let leftIdx = 0
  let rightIdx = array.length - 1
  let biggestSpotIdx = array.length - 1

  while (biggestSpotIdx >= 0) {
    if (Math.abs(array[leftIdx]) > Math.abs(array[rightIdx])) {
      ans[biggestSpotIdx] = array[leftIdx] * array[leftIdx]
      leftIdx++
    } else {
      ans[biggestSpotIdx] = array[rightIdx] * array[rightIdx]
      rightIdx--
    }

    biggestSpotIdx--
  }

  return ans
}

// console.log(sortedSquareArray([1, 2, 3, 5, 6, 8, 9]))
console.log(sortedSquareArray([-3, -2, -1]))

export {}
