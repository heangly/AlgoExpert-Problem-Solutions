class BST {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

// Time: O(n)  | Space: O(d) where d is the depth of the tree
function validateBst(tree) {
  validateHelper(tree, -Infinity, Infinity)
}

const validateHelper = (tree, minValue, maxValue) => {
  if (!tree) return true
  if (tree.value < minValue || tree.value >= maxValue) return false
  const leftIsValid = validateHelper(tree.left, minValue, tree.value)
  return leftIsValid && validateHelper(tree.right, tree.value, maxValue)
}
