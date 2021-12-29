class BinaryTree {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
    this.parent = null
  }
}

function findSuccessor(tree, node) {
  let foundNode = false
  let successor = null

  const dfs = (myTree) => {
    if (!myTree || successor !== null) return

    dfs(myTree.left)

    if (myTree.value === node.value) {
      foundNode = true
    } else if (foundNode && !successor) {
      successor = myTree
      return
    }

    dfs(myTree.right)
  }

  dfs(tree)
  return successor
}
