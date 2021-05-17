// Time : O(nlog(n)) | Space : O(n)
function minHeightBst(array) {
  return helper(array, null, 0, array.length - 1)
}

const helper = (array, bst, start, end) => {
  if (start > end) return
  const mid = Math.floor((start + end) / 2)
  if (bst) {
    bst.insert(array[mid])
  } else {
    bst = new BST(array[mid])
  }
  helper(array, bst, start, mid - 1)
  helper(array, bst, mid + 1, end)
  return bst
}

class BST {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }

  insert(value) {
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
