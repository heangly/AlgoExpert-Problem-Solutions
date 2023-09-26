// Do not edit the class below except for
// the insert, contains, and remove methods.
// Feel free to add new properties and methods
// to the class.
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
    let currentNode: BST | null = this

    while (true) {
      if (currentNode.value < value) {
        if (!currentNode.right) {
          currentNode.right = new BST(value)
          break
        } else {
          currentNode = currentNode.right
        }
      } else {
        if (!currentNode.left) {
          currentNode.left = new BST(value)
          break
        } else {
          currentNode = currentNode.left
        }
      }
    }

    return this
  }

  contains(value: number) {
    let currentNode: BST | null = this
    while (currentNode) {
      if (currentNode.value === value) return true
      if (currentNode.value > value) {
        currentNode = currentNode.left
      } else {
        currentNode = currentNode.right
      }
    }

    return false
  }

  remove(value: number): BST {
    let currentNode: BST | null = this
    if (!currentNode.left && !currentNode.right) return this

    return this
  }
}

const bst = new BST(10)
bst.insert(5)
bst.insert(15)
bst.insert(2)
bst.insert(13)

console.log(bst)

console.log(bst.contains(11))
