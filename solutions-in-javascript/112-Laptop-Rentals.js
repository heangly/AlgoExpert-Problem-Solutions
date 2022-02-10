const laptopRentals = (times) => {
  if (times.length === 0) return 0

  times.sort((a, b) => a[0] - b[0])
  const timesWhenLaptopIsUsed = [times[0]]
  const heap = new MinHeap(timesWhenLaptopIsUsed)

  for (let i = 1; i < times.length; i++) {
    const currentInterval = times[i]
    if (heap.peek()[1] <= currentInterval[0]) heap.remove()
    heap.insert(currentInterval)
  }
  return timesWhenLaptopIsUsed.length
}

class MinHeap {
  constructor(array) {
    this.heap = this.buildHeap(array)
  }

  getHeap() {
    return this.heap
  }

  buildHeap(array) {
    const parentIdx = Math.floor((array.length - 2) / 2)
    for (let i = parentIdx; i >= 0; i--) {
      this.siftDown(i, array.length - 1, array)
    }
    return array
  }

  siftDown(currentIdx, endIdx, array) {
    let childOneIdx = 2 * currentIdx + 1
    while (childOneIdx <= endIdx) {
      const childTwoIdx = 2 * currentIdx + 2 <= endIdx ? 2 * currentIdx + 2 : -1

      let idxtToSwap
      if (childTwoIdx !== -1 && array[childTwoIdx][1] < array[childOneIdx][1]) {
        idxtToSwap = childTwoIdx
      } else {
        idxtToSwap = childOneIdx
      }

      if (array[currentIdx][1] > array[idxtToSwap][1]) {
        this.swap(currentIdx, idxtToSwap, array)
        currentIdx = idxtToSwap
        childOneIdx = 2 * currentIdx + 1
      } else {
        return
      }
    }
  }

  siftUp(currentIdx, heap) {
    let parentIdx = Math.floor((currentIdx - 1) / 2)
    while (currentIdx > 0) {
      if (heap[currentIdx][1] < heap[parentIdx][1]) {
        this.swap(currentIdx, parentIdx, heap)
        currentIdx = parentIdx
        parentIdx = Math.floor((currentIdx - 1) / 2)
      } else {
        return
      }
    }
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

  peek() {
    return this.heap[0]
  }
}

console.log(
  laptopRentals([
    [0, 2],
    [1, 4],
    [4, 6],
    [0, 4],
    [7, 8],
    [9, 11],
    [3, 10]
  ])
)
