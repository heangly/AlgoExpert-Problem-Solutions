// **************  Iterative APPROACH  **************
// Avg: Time = O(log(n)) | Space = O(1)
// Worst: Time = O(n)    | Space = O(1)
const findClosestValueInBst = (tree, target) => {
  return findClosestHelper(tree, target, Infinity)
}

const findClosestHelper = (tree, target, closest) => {
  let currNode = tree
  while (currNode) {
    if (Math.abs(target - closest) > Math.abs(target - currNode.value)) {
      closest = currNode.value
    }

    if (target < currNode.value) {
      currNode = currNode.left
    } else if (target > currNode.value) {
      currNode = currNode.right
    } else {
      break
    }
  }
  return closest
}

// **************  RECURSIVE APPROACH  **************
// Avg: Time = O(log(n)) | Space = (O(log(n)))
// Worst: Time = O(n)    | Space = O(n)
const findClosestValueInBst2 = (tree, target) => {
  return findClosestHelper2(tree, target, Infinity)
}

const findClosestHelper2 = (tree, target, closest) => {
  if (!tree) return closest
  if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
    closest = tree.value
  }

  return target < tree.value
    ? findClosestHelper2(tree.left, target, closest)
    : target > tree.value
    ? findClosestHelper2(tree.right, target, closest)
    : tree.value
}
