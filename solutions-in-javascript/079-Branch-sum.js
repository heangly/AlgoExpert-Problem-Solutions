class BinaryTree {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

function branchSums(root) {
  const arr = []

  const dfs = (root, sum) => {
    if (!root) return
    if (!root.left && !root.right) {
      arr.push(sum + root.value)
    }

    dfs(root.left, sum + root.value)
    dfs(root.right, sum + root.value)
  }
  dfs(root, 0)
  return arr
}
