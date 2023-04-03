class BinaryTree {
  value: number
  left: BinaryTree | null
  right: BinaryTree | null

  constructor(value: number) {
    this.value = value
    this.left = null
    this.right = null
  }
}

// Time: O(n) | Space: O(d) where d is the longest depth of the tree
const invertBinaryTree = (tree: BinaryTree | null) => {
  if (!tree) return
  ;[tree.left, tree.right] = [tree.right, tree.left]

  invertBinaryTree(tree.left)
  invertBinaryTree(tree.right)

  return tree
}

export {}
