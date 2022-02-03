// Do not edit the class below except for the buildHeap,
// siftDown, siftUp, peek, remove, and insert methods.
// Feel free to add new properties and methods to the class.
class MinHeap {
  constructor(array) {
    this.heap = this.buildHeap(array)
  }

  buildHeap(array) {
    const firstParentIdx = Math.floor((array.length - 2) / 2)
    for (let i = firstParentIdx; i >= 0; i--) {
      this.siftDown(i, array.length - 1, array)
    }
    return array
  }

  siftDown(currentIdx, endIdx, heap) {
    let childOne = 2 * currentIdx + 1
    while (childOne <= endIdx) {
      const childTwo = 2 * currentIdx + 2 <= endIdx ? 2 * currentIdx + 2 : -1
      const idxToSwap =
        childTwo !== -1 && heap[childTwo] < heap[childOne] ? childTwo : childOne

      if (heap[currentIdx] > heap[idxToSwap]) {
        this.swap(currentIdx, idxToSwap, heap)
        currentIdx = idxToSwap
        childOne = currentIdx * 2 + 1
      } else {
        return
      }
    }
  }

  siftUp(currentIdx, heap) {
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
    this.siftDown(0, this.heap.length - 1, this.heap)
    return valueToRemove
  }

  insert(value) {
    this.heap.push(value)
    this.siftUp(this.heap.length - 1, this.heap)
  }

  swap(i, j, heap) {
    const temp = heap[i]
    heap[i] = heap[j]
    heap[j] = temp
  }
}
