// currentNode = i
// childOne = 2i + 1;
// childTwo = 2i + 2;
// parentNode = floor( (i-1) / 2 )

class MinHeap {
  constructor(array) {
    this.heap = this.buildHeap(array);
  }

  buildHeap(array) {
    // Write your code here.
    let firstParentIdx = Math.floor((array.length - 1) / 2);
    for (let currentIdx = firstParentIdx; currentIdx >= 0; currentIdx--) {
      this.siftDown(currentIdx, array.length - 1, array);
    }
    return array;
  }

  siftDown(currentIdx, endIdx, heap) {
    // Write your code here.
    let childOneIdx = currentIdx * 2 + 1;
    let idxToSwap;

    while (childOneIdx <= endIdx) {
      const childTwoIdx =
        currentIdx * 2 + 2 <= endIdx ? currentIdx * 2 + 2 : -1;

      if (childTwoIdx !== -1 && heap[childTwoIdx] < heap[childOneIdx]) {
        idxToSwap = childTwoIdx;
      } else {
        idxToSwap = childOneIdx;
      }

      if (heap[idxToSwap] < heap[currentIdx]) {
        [heap[currentIdx], heap[idxToSwap]] = [
          heap[idxToSwap],
          heap[currentIdx],
        ];
        currentIdx = idxToSwap;
        childOneIdx = currentIdx * 2 + 1;
      } else {
        break;
      }
    }
  }

  siftUp(currentIdx, heap) {
    // Write your code here.
    let pIdx = Math.floor((currentIdx - 1) / 2);
    while (currentIdx > 0 && heap[currentIdx] < heap[pIdx]) {
      [heap[currentIdx], heap[pIdx]] = [heap[pIdx], heap[currentIdx]];
      currentIdx = pIdx;
      pIdx = Math.floor((currentIdx - 1) / 2);
    }
  }

  peek() {
    // Write your code here.
    return this.heap[0];
  }

  remove() {
    // Write your code here.
    [this.heap[0], this.heap[this.heap.length - 1]] = [
      this.heap[this.heap.length - 1],
      this.heap[0],
    ];
    let valueToRemove = this.heap.pop();
    this.siftDown(0, this.heap.length - 1, this.heap);
    return valueToRemove;
  }

  insert(value) {
    // Write your code here.
    this.heap.push(value);
    this.siftUp(this.heap.length - 1, this.heap);
  }
}
