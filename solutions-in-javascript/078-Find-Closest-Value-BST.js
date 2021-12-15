function findClosestValueInBst(tree, target) {
  let smallestVal = tree.value
  let node = tree

  while (node) {
    let diff = Math.abs(target - node.value)
    if (diff < Math.abs(target - smallestVal)) {
      smallestVal = node.value
    }

    if (target < node.value) {
      node = node.left
    } else {
      node = node.right
    }
  }

  return smallestVal
}

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}
