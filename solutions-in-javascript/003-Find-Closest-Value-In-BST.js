class BST {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

// Time: O(log(n)) | Space: O(1)
const findClosestValueInBST = (tree, target) => {
  let node = tree
  let smallestDiff = Infinity
  let smallestNode = tree.value

  while (node) {
    if (node.value === target) {
      return target
    }
    let diff = Math.abs(target - node.value)

    if (diff < smallestDiff) {
      smallestDiff = diff
      smallestNode = node.value
    }

    node = target > node.value ? node.right : node.left
  }
  return smallestNode
}
