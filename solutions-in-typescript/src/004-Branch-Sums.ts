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

// Time: O(n) | Space: O(n) where n is the number of nodes in the tree
const branchSums = (tree: BinaryTree): number[] => {
  const arr: number[] = []
  dfs(tree, 0, arr)
  return arr
}

const dfs = (tree: BinaryTree | null, sum: number, arr: number[]): void => {
  if (!tree) return

  if (!tree.left && !tree.right) {
    arr.push(sum + tree.value)
    return
  }

  dfs(tree.left, sum + tree.value, arr)
  dfs(tree.right, sum + tree.value, arr)
}

const bst = new BinaryTree(1)
bst.left = new BinaryTree(2)
bst.right = new BinaryTree(3)
bst.left.left = new BinaryTree(4)
bst.left.right = new BinaryTree(5)
bst.right.left = new BinaryTree(6)
bst.right.right = new BinaryTree(7)
bst.left.left.left = new BinaryTree(8)
bst.left.left.right = new BinaryTree(9)
bst.left.right.left = new BinaryTree(10)

console.log(branchSums(bst))
