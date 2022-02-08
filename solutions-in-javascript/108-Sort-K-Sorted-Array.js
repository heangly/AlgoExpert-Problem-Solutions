const sortKSortedArray = (array, k) => {
  const heap = new Heap(array.slice(0, Math.min(k + 1, array.length)))
  let nextIdxToInsert = 0
  for (let idx = k + 1; idx < array.length; idx++) {
    const minElement = heap.remove()
    array[nextIdxToInsert] = minElement
    nextIdxToInsert++
    const currentElement = array[idx]
    heap.insert(currentElement)
  }

  while (!heap.isEmpty()) {
    const minElement = heap.remove()
    array[nextIdxToInsert] = minElement
    nextIdxToInsert++
  }

  return array
}

class Heap {
  constructor(array) {
    this.heap = this.buildHeap(array)
  }

  isEmpty() {
    return this.heap.length === 0
  }

  getHeap() {
    return this.heap
  }

  buildHeap(array) {
    const parentIdx = Math.floor(array.length / 2)
    for (let i = parentIdx; i >= 0; i--) {
      this.siftDown(i, array.length - 1, array)
    }
    return array
  }

  siftDown(currentIdx, endIdx, array) {
    let childOneIdx = 2 * currentIdx + 1

    while (childOneIdx <= endIdx) {
      const childTwoIdx = 2 * currentIdx + 2 <= endIdx ? 2 * currentIdx + 2 : -1

      let idxToSwap

      if (childTwoIdx !== -1 && array[childTwoIdx] < array[childOneIdx]) {
        idxToSwap = childTwoIdx
      } else {
        idxToSwap = childOneIdx
      }

      if (array[idxToSwap] < array[currentIdx]) {
        this.swap(idxToSwap, currentIdx, array)
        currentIdx = idxToSwap
        childOneIdx = 2 * currentIdx + 1
      } else {
        return
      }
    }
  }

  siftUp(currentIdx, array) {
    let parentIdx = Math.floor((currentIdx - 1) / 2)
    while (currentIdx > 0) {
      if (array[currentIdx] < array[parentIdx]) {
        this.swap(parentIdx, currentIdx, array)
        currentIdx = parentIdx
        parentIdx = Math.floor((currentIdx - 1) / 2)
      } else {
        return
      }
    }
  }

  peek() {
    return this.heap[0]
  }

  remove() {
    this.swap(0, this.heap.length - 1, this.heap)
    const removedValue = this.heap.pop()
    this.siftDown(0, this.heap.length - 1, this.heap)
    return removedValue
  }

  insert(value) {
    this.heap.push(value)
    this.siftUp(this.heap.length - 1, this.heap)
  }

  swap(i, j, array) {
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

// const sortKSortedArray = (array, k) => {
//   const ans = []
//   let position = 0
//   while (position < array.length) {
//     let min = Infinity
//     for (let i = position; i < k + 1; i++) {
//       if (array[i] < min) {
//         min = array[i]
//       }
//     }
//     ans.push(min)
//     position++
//   }

//   return ans
// }

console.log(sortKSortedArray([3, 2, 1, 0, 4, 7, 6, 5, 9, 8, 7], 3))
