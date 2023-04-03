class BST {
  value: number
  left: BST | null
  right: BST | null

  constructor(value: number) {
    this.value = value
    this.left = null
    this.right = null
  }
}

// Time: O(log(n)) | Space: O(1)
const findClosestValueInBST = (tree: BST, target: number) => {
  let currentNode: BST | null = tree
  const closest = {
    value: Infinity,
    element: currentNode.value
  }

  while (currentNode) {
    if (target === currentNode.value) return currentNode.value
    const diff = Math.abs(currentNode.value - target)

    if (diff < closest.value) {
      closest.value = diff
      closest.element = currentNode.value
    }

    if (target < currentNode.value) {
      currentNode = currentNode.left
    } else if (target > currentNode.value) {
      currentNode = currentNode.right
    }
  }

  return closest.element
}

const bst = new BST(10)
bst.left = new BST(5)
bst.right = new BST(15)
bst.left.left = new BST(2)
bst.left.right = new BST(5)
bst.right.left = new BST(13)
bst.right.right = new BST(22)
bst.left.left.left = new BST(1)
bst.right.left.right = new BST(14)

console.log(findClosestValueInBST(bst, 12))
console.log(findClosestValueInBST(new BST(1), 12))
export {}
