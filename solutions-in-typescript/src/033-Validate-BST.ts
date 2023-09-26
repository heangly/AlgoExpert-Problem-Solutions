// This is an input class. Do not edit.
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

// Time: O(N) | Space: O(d)
export function validateBst(tree: BST | null, min: number = -Infinity, max: number = Infinity): boolean {
  // Write your code here.
  if (!tree) return true
  if (tree.value >= max) return false
  if (tree.value < min) return false

  return validateBst(tree.left, min, tree.value) && validateBst(tree.right, tree.value, max)
}

const bst = new BST(10)
bst.left = new BST(5)
bst.left.left = new BST(2)
bst.left.right = new BST(5)
bst.left.left.left = new BST(1)
bst.right = new BST(15)
bst.right.left = new BST(13)
bst.right.right = new BST(22)
bst.right.left.right = new BST(14)

console.log(validateBst(bst))

/**
 *
 *         10
 *       5    15
 *        8
 *
 */
