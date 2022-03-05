const quickSelect = (array: number[], k: number): number => {
  let startIdx = 0
  let endIdx = array.length - 1

  while (true) {
    const pivotIdx = startIdx
    let leftIdx = startIdx + 1
    let rightIdx = endIdx

    while (leftIdx <= rightIdx) {
      if (
        array[leftIdx] > array[pivotIdx] &&
        array[rightIdx] < array[pivotIdx]
      ) {
        swap(leftIdx, rightIdx, array)
      }

      if (array[leftIdx] <= array[pivotIdx]) leftIdx++
      if (array[rightIdx] >= array[pivotIdx]) rightIdx--
    }

    swap(rightIdx, pivotIdx, array)

    if (rightIdx === k - 1) {
      return array[rightIdx]
    }

    if (rightIdx < k - 1) {
      startIdx = rightIdx + 1
    } else {
      endIdx = rightIdx - 1
    }
  }
}

const swap = (i: number, j: number, array: number[]) => {
  ;[array[i], array[j]] = [array[j], array[i]]
}

const array = [8, 5, 2, 9, 7, 6, 3]
const k = 3
console.log(quickSelect(array, k))
export {}
