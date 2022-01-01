// This is an input class. Do not edit.
class BST {
  constructor(value, left = null, right = null) {
    this.value = value
    this.left = left
    this.right = right
  }
}

function reconstructBst(preOrderTraversalValues) {
  const root = new BST(preOrderTraversalValues[0])

  for (let i = 1; i < preOrderTraversalValues.length; i++) {
    const node = new BST(preOrderTraversalValues[i])
    insert(root, node)
  }

  return root
}

const insert = (root, node) => {
  let curr = root

  while (curr) {
    if (curr.value > node.value) {
      if (!curr.left) {
        curr.left = node
        break
      }
      curr = curr.left
    } else {
      if (!curr.right) {
        curr.right = node
        break
      }
      curr = curr.right
    }
  }
}

console.log(reconstructBst([10, 4, 2, 1, 5, 17, 19, 18]))
