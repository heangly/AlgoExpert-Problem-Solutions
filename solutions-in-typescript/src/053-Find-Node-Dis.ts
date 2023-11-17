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

export function findNodesDistanceK(tree: BinaryTree, target: number, k: number) {
  dfs(tree)
  return []
}

const dfs = (node: BinaryTree | null, nums: number[] = []): number => {
  if (!node || (!node.left && !node.right)) return 0
  const pos = 1 + dfs(node.left) + dfs(node.right)

  return pos
}

const tree = new BinaryTree(1)
tree.left = new BinaryTree(2)
tree.left.left = new BinaryTree(4)
tree.left.right = new BinaryTree(5)
tree.right = new BinaryTree(3)
tree.right.right = new BinaryTree(6)
tree.right.right.left = new BinaryTree(7)
tree.right.right.right = new BinaryTree(8)

console.log(findNodesDistanceK(tree, 3, 2))
