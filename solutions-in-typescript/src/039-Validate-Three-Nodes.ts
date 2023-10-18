// This is an input class. Do not edit.
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

// Time: O(h) | space: O(h)
export function validateThreeNodes(nodeOne: BST, nodeTwo: BST, nodeThree: BST) {
  if (isChild(nodeTwo, nodeOne)) return isChild(nodeThree, nodeTwo)
  if (isChild(nodeTwo, nodeThree)) return isChild(nodeOne, nodeTwo)
  return false
}

const isChild = (parent: BST | null, child: BST): boolean => {
  if (!parent) return false
  if (child.value === parent.value) return true

  if (child.value > parent.value) {
    return isChild(parent.right, child)
  }

  return isChild(parent.left, child)
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
const nodeThree = bst.left.right.left

console.log(validateThreeNodes(nodeOne, nodeTwo, nodeThree))
