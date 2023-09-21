class BST {
  value: number
  left: BST | null
  right: BST | null

  constructor(value: number) {
    this.value = value
    this.left = null
    this.right = null
  }
}

// Time: O(log(n)) | Space: O(log(n))
export function findClosestValueInBst(tree: BST, target: number) {
  const traverse = (tree: BST | null, closest: number): number => {
    if (!tree) return closest
    if (Math.abs(target - tree.value) < Math.abs(closest - target)) {
      closest = tree.value
    }

    if (tree.value > target) {
      return traverse(tree.left, closest)
    }

    if (tree.value < target) {
      return traverse(tree.right, closest)
    }

    return closest
  }

  return traverse(tree, tree.value)
}

const bst = new BST(10)
bst.left = new BST(5)
bst.left.left = new BST(2)
bst.left.left.left = new BST(1)
bst.left.right = new BST(5)
bst.right = new BST(15)
bst.right.left = new BST(13)
bst.right.right = new BST(22)
bst.right.left.right = new BST(14)

console.log(findClosestValueInBst(bst, 12))
