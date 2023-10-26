// This is an input class. Do not edit.
export class BinaryTree {
  value: number
  left: BinaryTree | null
  right: BinaryTree | null

  constructor(value: number) {
    this.value = value
    this.left = null
    this.right = null
  }
}

export function evaluateExpressionTree(tree: BinaryTree) {
  return inOrderTraverse(tree)
}

// Time: O(n) time | Space: O(h)
const inOrderTraverse = (node: BinaryTree): number => {
  if (!node.left || !node.right) return node.value
  const leftValue = inOrderTraverse(node.left)
  const rightValue = inOrderTraverse(node.right)
  return calculateValues(leftValue, node.value, rightValue)
}

const calculateValues = (leftTreeValue: number, operator: number, rightTreeValue: number): number => {
  switch (operator) {
    case -1:
      return leftTreeValue + rightTreeValue
    case -2:
      return leftTreeValue - rightTreeValue
    case -3:
      return Math.trunc(leftTreeValue / rightTreeValue)
    case -4:
      return leftTreeValue * rightTreeValue
    default:
      return -Infinity
  }
}

const tree = new BinaryTree(-1)
tree.left = new BinaryTree(-2)
tree.left.left = new BinaryTree(-4)
tree.left.right = new BinaryTree(2)
tree.left.left.left = new BinaryTree(2)
tree.left.left.right = new BinaryTree(3)
tree.right = new BinaryTree(-3)
tree.right.left = new BinaryTree(8)
tree.right.right = new BinaryTree(3)

console.log(evaluateExpressionTree(tree))
