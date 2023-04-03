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

const maxPathSum = (tree: BinaryTree): number => {
  let max = -Infinity

  const dfs = (tree: BinaryTree | null): number => {
    if (!tree) return 0
    const left = Math.max(0, dfs(tree.left))
    const right = Math.max(0, dfs(tree.right))

    max = Math.max(max, tree.value + left + right)
    return Math.max(left, right) + tree.value
  }

  dfs(tree)
  return max
}

const bst = new BinaryTree(1)
bst.left = new BinaryTree(2)
bst.left.left = new BinaryTree(4)
bst.left.right = new BinaryTree(5)
bst.right = new BinaryTree(3)
bst.right.left = new BinaryTree(6)
bst.right.right = new BinaryTree(7)

console.log('====================================')
console.log(maxPathSum(bst))
console.log('====================================')

export {}
