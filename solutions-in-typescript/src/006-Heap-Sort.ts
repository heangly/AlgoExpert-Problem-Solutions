class Heap {
  private heap: number[]

  constructor(array: number[]) {
    this.buildHeap(array)
    this.heap = array
  }

  private buildHeap(array: number[]) {
    const parent = Math.floor(array.length / 2)
    for (let i = parent; i >= 0; i--) {
      this.siftDown(i, array.length - 1, array)
    }
  }

  private siftDown(currentIdx: number, endIdx: number, array: number[]) {
    let child1 = 2 * currentIdx + 1
    while (child1 <= endIdx) {
      const child2 = 2 * currentIdx + 2 <= endIdx ? 2 * currentIdx + 2 : -1
      let idxToSwap: number
      if (child2 !== -1 && array[child2] < array[child1]) {
        idxToSwap = child2
      } else {
        idxToSwap = child1
      }

      if (array[currentIdx] > array[idxToSwap]) {
        this.swap(currentIdx, idxToSwap, array)
        currentIdx = idxToSwap
        child1 = 2 * currentIdx + 1
      } else {
        return
      }
    }
  }

  private siftUp(currentIdx: number, array: number[]) {
    let parentIdx = (currentIdx - 1) / 2
    while (parentIdx >= 0 && array[currentIdx] < array[parentIdx]) {
      this.swap(parentIdx, currentIdx, array)
      currentIdx = parentIdx
      parentIdx = (currentIdx - 1) / 2
    }
  }

  private swap(i: number, j: number, array: number[]) {
    ;[array[i], array[j]] = [array[j], array[i]]
  }

  insert(value: number) {
    this.heap.push(value)
    this.siftUp(this.heap.length - 1, this.heap)
  }

  remove(): number {
    this.swap(0, this.heap.length - 1, this.heap)
    const removedValue = this.heap.pop()!
    this.siftDown(0, this.heap.length - 1, this.heap)
    return removedValue
  }

  peek(): number {
    return this.heap[this.heap.length - 1]
  }

  getHeap() {
    return this.heap
  }
}

const heapSort = (array: number[]): number[] => {
  const heap = new Heap(array)
  const res: number[] = []

  while (heap.peek() !== undefined) {
    res.push(heap.remove())
  }

  return res
}

console.log(
  heapSort([
    8, -6, 7, 10, 8, -1, 6, 2, 4, -5, 1, 10, 8, -10, -9, -10, 8, 9, -2, 7, -2, 4
  ])
)
export {}
