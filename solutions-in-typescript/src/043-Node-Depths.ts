// Time: O(n) | O(h) space where n is the number of nodes in Binary Tree and h is the height of the Binary tree
export function nodeDepths(root: BinaryTree) {
  return inOrderTraverse(root, 0)
}

const inOrderTraverse = (tree: BinaryTree | null, depth: number): number => {
  if (!tree) return 0
  return depth + inOrderTraverse(tree.left, depth + 1) + inOrderTraverse(tree.right, depth + 1)
}

// This is the class of the input binary tree.
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

const tree = new BinaryTree(1)
tree.left = new BinaryTree(2)
tree.left.left = new BinaryTree(4)
tree.left.right = new BinaryTree(5)
tree.left.left.left = new BinaryTree(8)
tree.left.left.right = new BinaryTree(9)
tree.right = new BinaryTree(3)
tree.right.left = new BinaryTree(6)
tree.right.right = new BinaryTree(7)

console.log(nodeDepths(tree))
