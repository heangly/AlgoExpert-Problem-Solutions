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

export function repairBst(tree: BST) {
  let nodeOne: BST | null = null
  let nodeTwo: BST | null = null
  let previousNode: BST | null = null

  const inOrderTraversal = (node: BST | null) => {
    if (!node) return
    inOrderTraversal(node.left)

    if (previousNode && previousNode.value > node.value) {
      if (!nodeOne) {
        nodeOne = previousNode
      }
      nodeTwo = node
    }

    previousNode = node
    inOrderTraversal(node.right)
  }

  inOrderTraversal(tree)

  const temp = nodeOne!.value
  nodeOne!.value = nodeTwo!.value
  nodeTwo!.value = temp

  return tree
}

const bst = new BST(10)
bst.left = new BST(7)
bst.left.left = new BST(3)
bst.left.left.left = new BST(2)
bst.left.right = new BST(12)
bst.right = new BST(20)
bst.right.left = new BST(8)
bst.right.right = new BST(22)
bst.right.left.right = new BST(14)

console.log(repairBst(bst))
