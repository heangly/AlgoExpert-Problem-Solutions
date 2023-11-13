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

// Time: O(n) | Space: O(h)
export function maxPathSum(tree: BinaryTree) {
  let max = -Infinity

  const dfs = (node: BinaryTree | null): number => {
    if (!node) return 0
    const leftSum = dfs(node.left)
    const rightSum = dfs(node.right)
    const maxOfBranches = node.value + Math.max(leftSum, rightSum)
    max = Math.max(max, maxOfBranches, node.value + leftSum + rightSum)
    return maxOfBranches
  }

  dfs(tree)
  return max
}

const tree = new BinaryTree(1)
tree.left = new BinaryTree(2)
tree.left.left = new BinaryTree(4)
tree.left.right = new BinaryTree(5)
tree.right = new BinaryTree(3)
tree.right.left = new BinaryTree(6)
tree.right.right = new BinaryTree(7)

console.log(maxPathSum(tree))
