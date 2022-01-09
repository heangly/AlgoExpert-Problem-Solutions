class BST {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }

  insert(head, newVal) {
    while (head) {
      if (newVal < head.value) {
        if (!head.left) {
          head.left = new BST(newVal)
          break
        }
        head = head.left
      } else {
        if (!head.right) {
          head.right = new BST(newVal)
          break
        }
        head = head.right
      }
    }
  }
}

const sameBsts = (arrayOne, arrayTwo) => {
  if (arrayOne.length !== arrayTwo.length || arrayOne[0] !== arrayTwo[0])
    return false

  const bst1 = new BST(arrayOne[0])
  const bst2 = new BST(arrayTwo[0])

  for (let i = 1; i < arrayOne.length; i++) {
    bst1.insert(bst1, arrayOne[i])
  }

  for (let i = 1; i < arrayTwo.length; i++) {
    bst2.insert(bst2, arrayTwo[i])
  }

  const b1 = getArray(bst1)
  const b2 = getArray(bst2)

  for (let i = 0; i < b1.length; i++) {
    if (b1[i] !== b2[i]) return false
  }
  return true
}

const getArray = (bst, array = []) => {
  if (!bst) return

  getArray(bst.left, array)
  array.push(bst.value)
  getArray(bst.right, array)

  return array
}

console.log(
  sameBsts([10, 15, 8, 12, 94, 81, 5, 2, 11], [10, 8, 5, 15, 2, 12, 11, 94, 81])
)
