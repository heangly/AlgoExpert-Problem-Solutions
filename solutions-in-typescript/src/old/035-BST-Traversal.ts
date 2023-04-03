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

// Time: O(n) | Space: O(d)
const inOrderTraverse = (tree: BST | null, array: number[]): number[] => {
  if (!tree) return array

  inOrderTraverse(tree.left, array)
  array.push(tree.value)
  inOrderTraverse(tree.right, array)

  return array
}

// Time: O(n) | Space: O(d)
const preOrderTraverse = (tree: BST | null, array: number[]): number[] => {
  if (!tree) return array

  array.push(tree.value)
  preOrderTraverse(tree.left, array)
  preOrderTraverse(tree.right, array)

  return array
}

// Time: O(n) | Space: O(d)
const postOrderTraverse = (tree: BST | null, array: number[]): number[] => {
  if (!tree) return array

  postOrderTraverse(tree.left, array)
  postOrderTraverse(tree.right, array)
  array.push(tree.value)

  return array
}

const bst = new BST(10)
bst.left = new BST(5)
bst.left.left = new BST(2)
bst.left.right = new BST(5)
bst.left.left.left = new BST(1)
bst.right = new BST(15)
bst.right.right = new BST(22)

console.log(inOrderTraverse(bst, []))
console.log(preOrderTraverse(bst, []))
console.log(postOrderTraverse(bst, []))

export {}
