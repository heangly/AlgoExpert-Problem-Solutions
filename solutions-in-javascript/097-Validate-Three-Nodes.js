class BST {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

function validateThreeNodes(nodeOne, nodeTwo, nodeThree) {
  if (isParent(nodeOne, nodeTwo)) {
    return isParent(nodeTwo, nodeThree)
  }

  if (isParent(nodeThree, nodeTwo)) {
    return isParent(nodeTwo, nodeOne)
  }

  return false
}

const isParent = (parentNode, target) => {
  if (parentNode === null) return false
  if (parentNode === target) return true

  return target.value < parentNode.value
    ? isParent(parentNode.left, target)
    : isParent(parentNode.right, target)
}
