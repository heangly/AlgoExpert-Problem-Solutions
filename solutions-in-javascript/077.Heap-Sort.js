const heapSort = (array) => {
  buildMaxHeap(array)

  for (let endIdx = array.length - 1; endIdx > 0; endIdx--) {
    swap(0, endIdx, array)
    siftDown(0, endIdx - 1, array)
  }

  return array
}

const buildMaxHeap = (arr) => {
  let firstParentIdx = Math.floor((arr.length - 1) / 2)
  for (let currentIdx = firstParentIdx; currentIdx >= 0; currentIdx--) {
    siftDown(currentIdx, arr.length - 1, arr)
  }
}

const siftDown = (currentIdx, endIdx, arr) => {
  let firstChildIdx = 2 * currentIdx + 1

  while (firstChildIdx <= endIdx) {
    let secondChildIdx = 2 * currentIdx + 2 <= endIdx ? 2 * currentIdx + 2 : -1
    let indexToSwap = null
    if (secondChildIdx !== -1 && arr[secondChildIdx] > arr[firstChildIdx]) {
      indexToSwap = secondChildIdx
    } else {
      indexToSwap = firstChildIdx
    }

    if (arr[indexToSwap] > arr[currentIdx]) {
      swap(currentIdx, indexToSwap, arr)
      currentIdx = indexToSwap
      firstChildIdx = currentIdx * 2 + 1
    } else {
      return
    }
  }
}

const swap = (i, j, arr) => {
  ;[arr[i], arr[j]] = [arr[j], arr[i]]
}

console.log(heapSort([8, 5, 2, 9, 5, 6, 3]))
