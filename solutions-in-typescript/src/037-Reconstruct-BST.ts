// This is an input class. Do not edit.
export class BST {
  value: number
  left: BST | null
  right: BST | null

  constructor(value: number, left: BST | null = null, right: BST | null = null) {
    this.value = value
    this.left = left
    this.right = right
  }
}

export function reconstructBst(preOrderTraversalValues: number[]): BST | null {
  const bst: BST = new BST(preOrderTraversalValues[0])

  const construct = (bst: BST | null, value: number) => {
    while (bst) {
      if (value < bst.value) {
        if (!bst.left) {
          bst.left = new BST(value)
          break
        } else {
          bst = bst.left
        }
      } else {
        if (!bst.right) {
          bst.right = new BST(value)
          break
        } else {
          bst = bst.right
        }
      }
    }
  }

  for (let i = 1; i < preOrderTraversalValues.length; i++) {
    construct(bst, preOrderTraversalValues[i])
  }

  return bst
}

console.log(reconstructBst([10, 4, 2, 1, 5, 17, 19, 18]))
