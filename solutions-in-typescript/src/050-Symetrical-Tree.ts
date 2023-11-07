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

// Time: O(N) | Space: O(H)
export function symmetricalTree(tree: BinaryTree) {
  return dfs(tree.left, tree.right)
}

const dfs = (leftTree: BinaryTree | null, rightTree: BinaryTree | null): boolean => {
  if (!leftTree && !rightTree) return true
  if (!leftTree || !rightTree) return false
  if (leftTree.value !== rightTree.value) return false
  return dfs(leftTree.left, rightTree.right) && dfs(leftTree.right, rightTree.left)
}
