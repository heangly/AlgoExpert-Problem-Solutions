// Time: O(n) | Space: O(n)
class BinaryTree {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

const branchSums = (root) => {
  // Write your code here.
  const ansArray = []
  helper(root, 0, ansArray)
  return ansArray
}

const helper = (node, runningSum, ansArray) => {
  if (!node) return
  const newRunningSum = runningSum + node.value

  if (!node.left && !node.right) {
    ansArray.push(newRunningSum)
    return
  }

  helper(node.left, newRunningSum, ansArray)
  helper(node.right, newRunningSum, ansArray)
}
