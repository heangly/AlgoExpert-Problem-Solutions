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

// Time: O(n) | Space: O(n)
const findKthLargestValueInBst = (tree: BST, k: number) => {
  const values: number[] = []

  const dfs = (node: BST | null) => {
    if (!node) return
    if (values.length >= k) return

    dfs(node.right)
    values.push(node.value)
    dfs(node.left)
  }

  dfs(tree)

  return values[k - 1]
}

const bst = new BST(15)
bst.left = new BST(5)
bst.right = new BST(20)
bst.left.left = new BST(2)
bst.left.right = new BST(5)
bst.right.left = new BST(17)
bst.right.right = new BST(22)
bst.left.left.left = new BST(1)
bst.left.left.right = new BST(3)

console.log(findKthLargestValueInBst(bst, 3))

export {}
