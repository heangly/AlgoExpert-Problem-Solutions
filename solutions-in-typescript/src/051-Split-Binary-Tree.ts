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

// Time: O(n) | Space: O(h)
export function splitBinaryTree(tree: BinaryTree) {
  const halfValue = sumAllValues(tree) / 2
  let found: boolean = false

  const dfs = (node: BinaryTree | null): number => {
    if (!node || found) return 0
    const sum = node.value + dfs(node.left) + dfs(node.right)

    if (sum === halfValue) {
      found = true
    }

    return sum
  }

  dfs(tree)
  return found ? halfValue : 0
}

const sumAllValues = (node: BinaryTree | null): number => {
  if (!node) return 0
  return node.value + sumAllValues(node.left) + sumAllValues(node.right)
}
