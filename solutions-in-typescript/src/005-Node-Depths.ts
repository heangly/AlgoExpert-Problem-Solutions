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

// Time: O(n) | Space: O(log(n))
const nodeDepths = (root: BinaryTree): number => {
  return dfs(root, 0)
}

const dfs = (tree: BinaryTree | null, depth: number): number => {
  if (!tree) return 0
  return depth + dfs(tree.left, depth + 1) + dfs(tree.right, depth + 1)
}
