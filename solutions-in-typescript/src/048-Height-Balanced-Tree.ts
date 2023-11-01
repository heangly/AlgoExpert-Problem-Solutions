// This is an input class. Do not edit.
export class BinaryTree {
  value: number
  left: BinaryTree | null
  right: BinaryTree | null

  constructor(value: number) {
    this.value = value
    this.left = null
    this.right = null
  }
}

// Time: O(N) | Space: O(h)
export function heightBalancedBinaryTree(tree: BinaryTree) {
  return dfs(tree) === Infinity ? false : true
}

const dfs = (node: BinaryTree | null): number => {
  if (!node) return 0
  const leftHeight = 1 + dfs(node.left)
  const rightHeight = 1 + dfs(node.right)
  const diff = Math.abs(leftHeight - rightHeight)
  if (diff > 1) return Infinity
  return Math.max(leftHeight, rightHeight)
}

const tree = new BinaryTree(1)
tree.left = new BinaryTree(2)
tree.left.left = new BinaryTree(4)
tree.left.right = new BinaryTree(5)
tree.left.right.left = new BinaryTree(7)
tree.left.right.right = new BinaryTree(8)
tree.right = new BinaryTree(3)
tree.right.right = new BinaryTree(6)

console.log(heightBalancedBinaryTree(tree))
