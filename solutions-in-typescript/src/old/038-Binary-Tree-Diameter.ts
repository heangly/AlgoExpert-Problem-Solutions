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
const binaryTreeDiameter = (tree: BinaryTree): number => {
  let max = 0

  const dfs = (node: BinaryTree | null): number => {
    if (!node) return -1

    const left = 1 + dfs(node?.left)
    const right = 1 + dfs(node?.right)

    max = Math.max(max, left + right)

    return Math.max(left, right)
  }

  dfs(tree)
  return max
}

const bst = new BinaryTree(1)
bst.left = new BinaryTree(3)
bst.right = new BinaryTree(2)
bst.left.left = new BinaryTree(7)
bst.left.left.left = new BinaryTree(8)
bst.left.left.left.left = new BinaryTree(9)

bst.left.right = new BinaryTree(4)
bst.left.right.right = new BinaryTree(5)
bst.left.right.right.right = new BinaryTree(6)

console.log(binaryTreeDiameter(bst))

export {}
