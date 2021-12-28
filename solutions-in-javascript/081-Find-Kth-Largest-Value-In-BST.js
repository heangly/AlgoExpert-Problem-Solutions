class BST {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

const findKthLargestValueInBst = (tree, k) => {
  const arr = []

  const dfs = (node) => {
    if (arr.length >= k) return
    if (!node) return

    dfs(node.right)
    arr.push(node.value)
    dfs(node.left)
  }

  dfs(tree)

  return arr[k - 1]
}
