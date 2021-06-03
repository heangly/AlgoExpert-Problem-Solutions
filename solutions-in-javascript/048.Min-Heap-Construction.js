// Do not edit the class below except for the buildHeap,
// siftDown, siftUp, peek, remove, and insert methods.
// Feel free to add new properties and methods to the class.
// ***** Getting childNodes from traditional array format *****
// Eg. [8, 12, 23, 17, 31, 30, 44, 102, 18]
// currentNodeIdx = i
// childOneIdx = 2i + 1
// childTwoIdx = 2i + 2

// ***** Getting parentNodes from traditional array format *****
// parentNodeIdx = floor( (i-1) / 2 )

class MinHeap {
  constructor(array) {
    this.heap = this.buildHeap(array)
  }

  buildHeap(array) {
    const firstParentIdx = Math.floor((array.length - 2) / 2)
    for (let i = firstParentIdx; i >= 0; i--) {
      this.shiftDown(i, array.length - 1, array)
    }
    return array
  }

  shiftDown(currentIdx, endIdx, heap) {
    let childOneIdx = currentIdx * 2 + 1

    while (childOneIdx <= endIdx) {
      let childTwoIdx = currentIdx * 2 + 2 <= endIdx ? currentIdx * 2 + 2 : -1
      let idxToSwap = null
      if (childTwoIdx !== -1 && heap[childTwoIdx] < heap[childOneIdx]) {
        idxToSwap = childTwoIdx
      } else {
        idxToSwap = childOneIdx
      }

      if (heap[idxToSwap] < heap[currentIdx]) {
        this.swap(currentIdx, idxToSwap, heap)
        currentIdx = idxToSwap
        childOneIdx = currentIdx * 2 + 1
      } else {
        return
      }
    }
  }

  shiftUp(currentIdx, heap) {
    let parentIdx = Math.floor((currentIdx - 1) / 2)
    while (currentIdx > 0 && heap[currentIdx] < heap[parentIdx]) {
      this.swap(currentIdx, parentIdx, heap)
      currentIdx = parentIdx
      parentIdx = Math.floor((currentIdx - 1) / 2)
    }
  }

  peek() {
    return this.heap[0]
  }

  remove() {
    this.swap(0, this.heap.length - 1, this.heap)
    const valueToRemove = this.heap.pop()
    this.shiftDown(0, this.heap.length - 1, this.heap)
    return valueToRemove
  }

  insert(value) {
    this.heap.push(value)
    this.shiftUp(this.heap.length - 1, this.heap)
  }

  swap(i, j, heap) {
    ;[heap[i], heap[j]] = [heap[j], heap[i]]
  }
}
