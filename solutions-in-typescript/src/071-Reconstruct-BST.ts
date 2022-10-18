class BST {
  value: number
  left: BST | null
  right: BST | null

  constructor(
    value: number,
    left: BST | null = null,
    right: BST | null = null
  ) {
    this.value = value
    this.left = left ?? null
    this.right = right ?? null
  }
}

const reconstructBst = (preOrderTraversalValues: number[]): BST | null => {
  let root: BST | null = new BST(preOrderTraversalValues[0])
  const head = root

  for (let i = 1; i < preOrderTraversalValues.length; i++) {
    const value = preOrderTraversalValues[i]

    while (root) {
      if (value < root.value) {
        if (!root.left) {
          root.left = new BST(value)
          break
        }
        root = root.left
      } else {
        if (!root.right) {
          root.right = new BST(value)
          break
        }
        root = root.right
      }
    }

    root = head
  }

  return head
}

console.log(reconstructBst([10, 4, 2, 1, 5, 17, 19, 18]))

export {}
