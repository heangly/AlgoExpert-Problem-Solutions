class BST {
  value: number
  left: BST | null
  right: BST | null

  constructor(value: number) {
    this.value = value
    this.left = null
    this.right = null
  }

  insert(value: number) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value)
      } else {
        this.left.insert(value)
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value)
      } else {
        this.right.insert(value)
      }
    }
  }
}

// Time: O(n) | space: O(n)
const minHeightBST = (array: number[]) => {
  const helper = (startIdx: number, endIdx: number): BST | null => {
    if (startIdx > endIdx) return null

    const midIdx = Math.floor((startIdx + endIdx) / 2)
    const bst = new BST(array[midIdx])

    bst.left = helper(startIdx, midIdx - 1)
    bst.right = helper(midIdx + 1, endIdx)

    return bst
  }

  return helper(0, array.length - 1)
}

const arr = [1, 2, 5, 7, 10, 13, 14, 15, 22]
console.log(minHeightBST(arr))

export {}
