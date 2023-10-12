// This is an input class. Do not edit.
export class BST {
  value: number
  left: BST | null
  right: BST | null

  constructor(value: number) {
    this.value = value
    this.left = null
    this.right = null
  }
}

// Time: O(h + k) | Space: O(h + k)
export function findKthLargestValueInBst(tree: BST, k: number) {
  const arr: number[] = []
  let count = 0

  const traverse = (tree: BST | null, count: number) => {
    if (!tree) return
    if (arr.length === k) return

    traverse(tree.right, count + 1)
    arr.push(tree.value)
    traverse(tree.left, count + 1)
  }

  traverse(tree, count)

  return arr[k - 1] ?? arr[arr.length - 1]
}

const bst = new BST(15)
bst.left = new BST(5)
bst.left.left = new BST(2)
bst.left.right = new BST(5)
bst.left.left.left = new BST(1)
bst.left.left.right = new BST(3)
bst.right = new BST(20)
bst.right.left = new BST(17)
bst.right.right = new BST(22)

console.log(findKthLargestValueInBst(bst, 2))
