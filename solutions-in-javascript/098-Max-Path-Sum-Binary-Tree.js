function maxPathSum(tree) {
  let max = -Infinity
  const dfs = (node) => {
    if (!node) return 0
    const left = Math.max(dfs(node.left), 0)
    const right = Math.max(dfs(node.right), 0)
    max = Math.max(max, node.value + left + right)
    return Math.max(left, right) + node.value
  }

  dfs(tree)
  return max
}
