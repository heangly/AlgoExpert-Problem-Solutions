// O(n) time | O(d) space
function invertBinaryTree(tree) {
  // Write your code here.
  if (!tree) return
  ;[tree.left, tree.right] = [tree.right, tree.left]
  invertBinaryTree(tree.left)
  invertBinaryTree(tree.right)
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}
