// This is an input class. Do not edit.
export class BinaryTree {
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

// Time: O(n) | Space: O(h)
export function findSuccessor(tree: BinaryTree, node: BinaryTree) {
  let foundTargetNode = false
  let output: BinaryTree | null = null

  const dfs = (currNode: BinaryTree | null) => {
    if (!currNode || !output) return

    dfs(currNode.left)

    if (currNode.value === node.value) {
      foundTargetNode = true
    } else if (!output && foundTargetNode) {
      output = currNode
      return
    }

    dfs(currNode.right)
  }

  dfs(tree)
  return output
}

const tree = new BinaryTree(1)
tree.left = new BinaryTree(2)
tree.left.left = new BinaryTree(4)
tree.left.right = new BinaryTree(5)
tree.left.left.left = new BinaryTree(6)
tree.right = new BinaryTree(3)

console.log(findSuccessor(tree, tree.left.right))
