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

// Time: O(n) | Space: O(d)
const validateBst = (
  tree: BST | null,
  min: number = -Infinity,
  max: number = Infinity
): any => {
  if (!tree) return true

  if (tree.value < min || tree.value >= max) return false

  return (
    validateBst(tree.left, min, tree.value) &&
    validateBst(tree.right, tree.value, max)
  )
}

const bst = new BST(10)
bst.left = new BST(5)
bst.left.left = new BST(2)
bst.left.left.left = new BST(1)

bst.right = new BST(15)
bst.right.left = new BST(13)
bst.right.right = new BST(22)
bst.right.left.right = new BST(14)

console.log(validateBst(bst))

export {}
