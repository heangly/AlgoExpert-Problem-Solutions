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

// Time: O(n) | Space: O(n)
const heightBalancedBinaryTree = (tree: BinaryTree) => {
  const dfs = (node: BinaryTree | null): number => {
    if (!node) return 0

    const left = 1 + dfs(node.left)
    const right = 1 + dfs(node.right)

    return Math.abs(left - right) > 1 ? Infinity : Math.max(left, right)
  }

  return dfs(tree) === Infinity ? false : true
}

const bst = new BinaryTree(1)
bst.left = new BinaryTree(2)
bst.right = new BinaryTree(3)
bst.left.left = new BinaryTree(4)
bst.left.right = new BinaryTree(5)
bst.left.right.left = new BinaryTree(7)
bst.left.right.right = new BinaryTree(8)
bst.right.right = new BinaryTree(6)

console.log(heightBalancedBinaryTree(bst))

export {}
