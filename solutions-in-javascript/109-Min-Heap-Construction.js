class MinHeap {
  constructor(array) {
    this.heap = this.buildHeap(array)
  }

  // O(N) Time | O(1) Space
  buildHeap(array) {
    const firstParent = Math.floor((array.length - 2) / 2)
    for (let i = firstParent; i >= 0; i--) {
      this.siftDown(i, array.length - 1, array)
    }
    return array
  }

  // O(logN) Time | O(1) Space
  siftDown(currentIdx, endIdx, heap) {
    let firstChild = 2 * currentIdx + 1

    while (firstChild <= endIdx) {
      const secondChild = 2 * currentIdx + 2 <= endIdx ? 2 * currentIdx + 2 : -1
      let idxToSwap

      if (secondChild !== -1 && heap[secondChild] < heap[firstChild]) {
        idxToSwap = secondChild
      } else {
        idxToSwap = firstChild
      }

      if (heap[currentIdx] > heap[idxToSwap]) {
        this.swap(currentIdx, idxToSwap, heap)
        currentIdx = idxToSwap
        firstChild = 2 * currentIdx + 1
      } else {
        return
      }
    }
  }

  // O(log(N)) Time | O(1) Space
  siftUp(currentIdx, heap) {
    let parentIdx = Math.floor((currentIdx - 1) / 2)
    while (currentIdx > 0 && heap[parentIdx] > heap[currentIdx]) {
      this.swap(currentIdx, parentIdx, heap)
      currentIdx = parentIdx
      parentIdx = Math.floor((currentIdx - 1) / 2)
    }
  }

  // O(1) Time | O(1) Sapce
  peek() {
    return this.heap[0]
  }
  // O(1) Time | O(1) Space
  swap(idx1, idx2, heap) {
    ;[heap[idx1], heap[idx2]] = [heap[idx2], heap[idx1]]
  }

  // O(log(N)) Time | O(1) Space
  insert(value) {
    this.heap.push(value)
    this.siftUp(this.heap.length - 1, this.heap)
  }

  // O(log(N)) Time | O(1) Space
  remove() {
    this.swap(0, this.heap.length - 1, this.heap)
    const value = this.heap.pop()
    this.siftDown(0, this.heap.length - 1, this.heap)
    return value
  }

  // O(1) Time | O(1) Space
  getHeap() {
    return this.heap
  }
}

const arr = [48, 12, 24, 7, 8, -5, 24, 391, 24, 56, 2, 6, 8, 41]

const minHeap = new MinHeap(arr)

console.log(minHeap.getHeap())
