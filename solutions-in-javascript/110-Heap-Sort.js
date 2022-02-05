const heapSort = (array) => {
  const heap = new Heap(array)
  const arr = []
  while (heap.getHeap().length) {
    arr.push(heap.remove())
  }
  return arr
}

class Heap {
  constructor(array) {
    this.heap = this.buildHeap(array)
  }

  buildHeap(array) {
    const parent = Math.floor((array.length - 2) / 2)
    for (let i = parent; i >= 0; i--) {
      this.siftDown(i, array.length - 1, array)
    }
    return array
  }

  insert(value) {
    this.heap.push(value)
    this.siftUp(this.heap.length - 1, this.heap)
  }

  siftDown(currentIdx, endIdx, heap) {
    let childOne = 2 * currentIdx + 1
    while (childOne <= endIdx) {
      const childTwo = 2 * currentIdx + 2 <= endIdx ? 2 * currentIdx + 2 : -1
      let idxToSwap

      if (childTwo !== -1 && heap[childTwo] < heap[childOne]) {
        idxToSwap = childTwo
      } else {
        idxToSwap = childOne
      }

      if (heap[currentIdx] > heap[idxToSwap]) {
        this.swap(currentIdx, idxToSwap, heap)
        currentIdx = idxToSwap
        childOne = 2 * currentIdx + 1
      } else {
        return
      }
    }
  }

  getHeap = () => {
    return this.heap
  }

  peek() {
    return this.heap[0]
  }

  siftUp(currentIdx, heap) {
    let parentIdx = Math.floor((currentIdx - 1) / 2)
    while (currentIdx > 0 && heap[currentIdx] < heap[parentIdx]) {
      this.swap(currentIdx, parentIdx, heap)
      currentIdx = parentIdx
      parentIdx = Math.floor((currentIdx - 1) / 2)
    }
  }

  remove() {
    this.swap(0, this.heap.length - 1, this.heap)
    const value = this.heap.pop()
    this.siftDown(0, this.heap.length - 1, this.heap)
    return value
  }

  swap(i, j, heap) {
    ;[heap[i], heap[j]] = [heap[j], heap[i]]
  }
}

console.log(heapSort([8, 5, 2, 9, 5, 6, 3]))
