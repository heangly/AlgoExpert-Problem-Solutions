export class BST {
  value: number
  left: BST | null
  right: BST | null

  constructor(value: number) {
    this.value = value
    this.left = null
    this.right = null
  }

  insert(value: number): BST {
    let tree: BST | null = this

    while (tree) {
      if (value < tree.value) {
        // going left
        if (!tree.left) {
          tree.left = new BST(value)
          return this
        }
        tree = tree.left
      } else {
        // going right
        if (!tree.right) {
          tree.right = new BST(value)
          return this
        }
        tree = tree.right
      }
    }

    return this
  }

  contains(value: number): Boolean {
    let tree: BST | null = this

    while (tree) {
      if (value === tree.value) return true

      if (value < tree.value) {
        tree = tree.left
      } else {
        tree = tree.right
      }
    }

    return false
  }

  remove(value: number, parentNode: BST | null = null): BST {
    let currentNode: BST | null = this

    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode
        currentNode = currentNode.left
      } else if (value > currentNode.value) {
        parentNode = currentNode
        currentNode = currentNode.right
      } else {
        if (currentNode.left && currentNode.right) {
          currentNode.value = currentNode.right.getMinValue()
          currentNode.right.remove(currentNode.value, currentNode)
        } else if (!parentNode) {
          if (currentNode.left) {
            currentNode.value = currentNode.left.value
            currentNode.right = currentNode.left.right
            currentNode.left = currentNode.left.left
          } else if (currentNode.right) {
            currentNode.value = currentNode.right.value
            currentNode.left = currentNode.right.left
            currentNode.right = currentNode.right.right
          } else {
          }
        } else if (parentNode.left === currentNode) {
          parentNode.left = currentNode.left
            ? currentNode.left
            : currentNode.right
        } else if (parentNode.right === currentNode) {
          parentNode.right = currentNode.left
            ? currentNode.left
            : currentNode.right
        }

        break
      }
    }

    return this
  }

  getMinValue(): number {
    let currentNode: BST = this
    while (currentNode.left) {
      currentNode = currentNode.left
    }
    return currentNode.value
  }
}

const bst = new BST(10)
bst.left = new BST(5)
bst.left.left = new BST(2)
bst.left.right = new BST(5)
bst.left.left.left = new BST(1)
bst.right = new BST(15)
bst.right.left = new BST(13)
bst.right.right = new BST(22)
bst.right.left.right = new BST(14)

console.log(bst.remove(22))
