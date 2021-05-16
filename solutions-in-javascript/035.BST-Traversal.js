// Time: O(n) | Space: O(n)
function inOrderTraverse(tree, array) {
  // Write your code here.
  if (tree) {
    inOrderTraverse(tree.left, array)
    array.push(tree.value)
    inOrderTraverse(tree.right, array)
  }
  return array
}

// Time: O(n) | Space: O(n)
function preOrderTraverse(tree, array) {
  // Write your code here.
  if (tree) {
    array.push(tree.value)
    preOrderTraverse(tree.left, array)
    preOrderTraverse(tree.right, array)
  }
  return array
}

// Time: O(n) | Space: O(n)
function postOrderTraverse(tree, array) {
  // Write your code here.
  if (tree) {
    postOrderTraverse(tree.left, array)
    postOrderTraverse(tree.right, array)
    array.push(tree.value)
  }
  return array
}
