export class BST {
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

// Time: O(N) | Space: O(N) where N is the length of array
export function minHeightBst(array: number[]) {
  const insertNumberAtMiddleIndex = (startIndex: number, endIndex: number) => {
    if (endIndex < startIndex) return null
    const middleIndex = Math.floor((startIndex + endIndex) / 2)
    const bst = new BST(array[middleIndex])
    bst.left = insertNumberAtMiddleIndex(startIndex, middleIndex - 1)
    bst.right = insertNumberAtMiddleIndex(middleIndex + 1, endIndex)
    return bst
  }

  return insertNumberAtMiddleIndex(0, array.length - 1)
}

console.log(minHeightBst([1, 2, 5, 7, 10, 13, 14, 15, 22]))
