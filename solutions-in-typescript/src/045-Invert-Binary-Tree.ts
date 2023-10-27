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

// Time: O(n) | Space: O(d) where n is the number of node in the tree and d is the depth/height of the tree
export function invertBinaryTree(tree: BinaryTree | null) {
  if (!tree) return
  ;[tree.left, tree.right] = [tree.right, tree.left]
  invertBinaryTree(tree.left)
  invertBinaryTree(tree.right)

  return tree
}

const tree = new BinaryTree(1)
tree.left = new BinaryTree(2)
tree.left.left = new BinaryTree(4)
tree.left.right = new BinaryTree(5)
tree.left.left.left = new BinaryTree(8)
tree.left.left.right = new BinaryTree(9)
tree.right = new BinaryTree(3)
tree.right.left = new BinaryTree(6)
tree.right.right = new BinaryTree(7)

console.log(invertBinaryTree(tree))
