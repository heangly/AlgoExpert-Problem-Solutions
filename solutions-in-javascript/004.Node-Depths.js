// Recursive Approach
// O(n) time | O(h) space
const nodeDepths = (root) => {
  return helper(root, 0)
}

const helper = (node, depth) => {
  if (!node) return 0
  return depth + helper(node.left, depth + 1) + helper(node.right, depth + 1)
}

// Iterative Approach
// O(n) | O(h) space
const nodeDepths = (root) => {
  let sumOfDepths = 0
  const stack = [{ node: root, depth: 0 }]
  while (stack.length > 0) {
    const { node, depth } = stack.pop()
    if (!node) continue
    sumOfDepths += depth
    stack.push({ node: node.left, depth: depth + 1 })
    stack.push({ node: node.right, depth: depth + 1 })
  }
  return sumOfDepths
}
