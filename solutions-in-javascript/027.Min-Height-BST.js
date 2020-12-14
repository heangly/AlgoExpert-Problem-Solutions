function minHeightBst(array) {
  // Write your code here.
  return helper(0, array.length - 1, null, array);
}

function helper(start, end, bst, array) {
  if (end < start) return;
  let mid = Math.floor((start + end) / 2);
  if (!bst) {
    bst = new BST(array[mid]);
  } else {
    bst.insert(array[mid]);
  }
  helper(start, mid - 1, bst, array);
  helper(mid + 1, end, bst, array);
  return bst;
}

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }
}
