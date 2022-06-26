// Time: O(n^2) | Space: O(1)
const selectionSort = (array: number[]) => {
  let startIdx = 0

  while (startIdx < array.length - 1) {
    let smallestIdx = startIdx
    for (let i = startIdx + 1; i < array.length; i++) {
      if (array[i] < array[smallestIdx]) {
        smallestIdx = i
      }
    }
    smallestIdx !== startIdx && swap(smallestIdx, startIdx, array)
    startIdx++
  }

  return array
}

const swap = (i: number, j: number, array: number[]): void => {
  ;[array[i], array[j]] = [array[j], array[i]]
}

console.log(selectionSort([8, 5, 2, 9, 5, 6, 3]))
export {}
