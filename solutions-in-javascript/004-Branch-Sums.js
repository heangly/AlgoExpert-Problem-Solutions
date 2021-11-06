const brachSums = (root) => {
  if (!root) {
    return
  }

  runningSum += root.value

  if (!root.left && !root.right) {
    arr.push(runningSum)
  }

  branchSums(root.left, runningSum, arr)
  branchSums(root.right, runningSum, arr)

  return arr
}
