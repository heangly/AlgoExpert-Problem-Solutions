class MinHeap {
  heap: number[]

  constructor(array: number[]) {
    this.heap = []
    this.buildHeap(array)
  }

  buildHeap(array: number[]) {
    for (const num of array) {
      this.insert(num)
    }
  }

  siftDown() {
    let currentIdx = 0
    let childOneIdx = currentIdx * 2 + 1
    while (childOneIdx < this.heap.length) {
      const childTwoIdx =
        currentIdx * 2 + 2 < this.heap.length ? currentIdx * 2 + 2 : -1
      let idxToSwap = childOneIdx

      if (
        childTwoIdx !== -1 &&
        this.heap[childOneIdx] > this.heap[childTwoIdx]
      ) {
        idxToSwap = childTwoIdx
      }

      if (this.heap[currentIdx] > this.heap[idxToSwap]) {
        this.swap(currentIdx, idxToSwap)
        currentIdx = idxToSwap
        childOneIdx = currentIdx * 2 + 1
      } else {
        return
      }
    }
  }

  siftUp() {
    let currentIdx = this.heap.length - 1
    let parentIdx = Math.floor((currentIdx - 1) / 2)

    while (currentIdx > 0 && this.heap[parentIdx] > this.heap[currentIdx]) {
      this.swap(parentIdx, currentIdx)
      currentIdx = parentIdx
      parentIdx = Math.floor((currentIdx - 1) / 2)
    }
  }

  peek() {
    return this.heap[0]
  }

  remove() {
    this.swap(0, this.heap.length - 1)
    const removedValue = this.heap.pop()!
    this.siftDown()
    return removedValue
  }

  insert(value: number) {
    this.heap.push(value)
    this.siftUp()
  }

  swap(i: number, j: number) {
    ;[this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
  }
}

export {}
