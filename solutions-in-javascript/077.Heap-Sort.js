function heapSort(array) {
  buildMaxHeap(array)
  for (let i = array.length - 1; i > 0; i--) {
    ;[array[0], array[i]] = [array[i], array[0]]
    siftDown(0, i - 1, array)
  }
  return array
}

const buildMaxHeap = (arr) => {
  let firstParent = Math.floor(arr.length - 1 / 2)
  for (let i = firstParent; i >= 0; i--) {
    siftDown(i, arr.length - 1, arr)
  }
}

const siftDown = (current, end, arr) => {
  let childOne = current * 2 + 1
  while (childOne <= end) {
    const childTwoIdx = current * 2 + 2 <= end ? current * 2 + 2 : -1
    let idxToSwap
    if (childTwoIdx !== -1 && arr[childTwoIdx] > arr[childOne]) {
      idxToSwap = childTwoIdx
    } else {
      idxToSwap = childOne
    }

    if (arr[idxToSwap] > arr[current]) {
      ;[arr[current], arr[idxToSwap]] = [arr[idxToSwap], arr[current]]
      current = idxToSwap
      childOne = current * 2 + 1
    } else {
      return
    }
  }
}

console.log(heapSort([8, 5, 2, 9, 5, 6, 3]))
