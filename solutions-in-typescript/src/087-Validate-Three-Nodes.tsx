export class BST {
  value: number
  left: BST | null
  right: BST | null

  constructor(value: number) {
    this.value = value
    this.left = null
    this.right = null
  }
}

// Time: O(h) | Space: O(h) where h is the height of the tree
const validateThreeNodes = (nodeOne: BST, nodeTwo: BST, nodeThree: BST) => {
  if (isDescendant(nodeTwo, nodeOne)) return isDescendant(nodeThree, nodeTwo)
  if (isDescendant(nodeTwo, nodeThree)) return isDescendant(nodeOne, nodeTwo)

  return false
}

const isDescendant = (node: BST | null, target: BST): boolean => {
  if (!node) return false
  if (node === target) return true

  return target.value < node.value
    ? isDescendant(node.left, target)
    : isDescendant(node.right, target)
}

const bst = new BST(5)
bst.left = new BST(2)
bst.left.left = new BST(1)
bst.left.left.left = new BST(0)
bst.left.right = new BST(4)
bst.left.right.left = new BST(3)
bst.right = new BST(7)
bst.right.left = new BST(6)
bst.right.right = new BST(8)

const nodeOne = bst
const nodeTwo = bst.left
const nodeThree = bst.left.right?.left

console.log(validateThreeNodes(nodeOne, nodeTwo, nodeThree))
export {}
