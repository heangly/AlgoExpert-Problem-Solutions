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
export function binaryTreeDiameter(tree: BinaryTree) {
  let max = -Infinity

  const dfs = (node: BinaryTree | null): number => {
    if (!node) return -1
    const left = 1 + dfs(node.left)
    const right = 1 + dfs(node.right)
    max = Math.max(max, left + right)
    return Math.max(left, right)
  }

  dfs(tree)
  return max
}

const tree = new BinaryTree(1)
tree.left = new BinaryTree(3)
tree.left.left = new BinaryTree(7)
tree.left.left.left = new BinaryTree(8)
tree.left.left.left.left = new BinaryTree(9)
tree.left.right = new BinaryTree(4)
tree.left.right.right = new BinaryTree(5)
tree.left.right.right.right = new BinaryTree(6)
tree.right = new BinaryTree(2)

console.log(binaryTreeDiameter(tree))
