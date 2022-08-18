class BinaryTree {
  value: number
  left: BinaryTree | null
  right: BinaryTree | null
  parent: BinaryTree | null

  constructor(value: number) {
    this.value = value
    this.left = null
    this.right = null
    this.parent = null
  }
}

// Time: O(n) | space: O(n)
const findSuccessor = (
  tree: BinaryTree,
  node: BinaryTree
): BinaryTree | null => {
  const output: number[] = []
  let ans: BinaryTree | null = null

  const dfs = (currNode: BinaryTree | null) => {
    if (!currNode) return

    dfs(currNode.left)
    if (!ans && output[output.length - 1] === node.value) {
      ans = currNode
      return
    }
    output.push(currNode.value)
    dfs(currNode.right)
  }

  dfs(tree)

  return ans
}

const bst = new BinaryTree(1)
bst.left = new BinaryTree(2)
bst.right = new BinaryTree(3)
bst.left.left = new BinaryTree(4)
bst.left.right = new BinaryTree(5)
bst.left.left.left = new BinaryTree(6)

const node = new BinaryTree(5)

console.log(findSuccessor(bst, node))

export {}
