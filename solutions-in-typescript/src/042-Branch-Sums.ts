// This is the class of the input root.
// Do not edit it.
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

//  Time: O(n) | Space: O(n) where n is the number of nodes in the tree
export function branchSums(root: BinaryTree): number[] {
  const arr: number[] = []
  dfs(root, 0, arr)
  return arr
}

const dfs = (tree: BinaryTree | null, sum: number, arr: number[]) => {
  if (!tree) return

  if (!tree.left && !tree.right) {
    arr.push(sum + tree.value)
    return
  }

  dfs(tree.left, sum + tree.value, arr)
  dfs(tree.right, sum + tree.value, arr)
}

const tree = new BinaryTree(1)
tree.left = new BinaryTree(2)
tree.left.left = new BinaryTree(4)
tree.left.left.left = new BinaryTree(8)
tree.left.left.right = new BinaryTree(9)
tree.left.right = new BinaryTree(5)
tree.left.right.left = new BinaryTree(10)
tree.right = new BinaryTree(3)
tree.right.left = new BinaryTree(6)
tree.right.right = new BinaryTree(7)

console.log(branchSums(tree))
