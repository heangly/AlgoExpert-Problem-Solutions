class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function validateBst(tree, min = -Infinity, max = Infinity) {
  if (!tree) return true;

  if (tree.value < min || tree.value >= max) return false;
  let left = validateBst(tree.left, min, tree.value);
  return left && validateBst(tree.right, tree.value, max);
}

let bst = new BST(10);
bst.left = new BST(5);
bst.left.left = new BST(2);
bst.left.left.left = new BST(1);
bst.left.right = new BST(5);
bst.right = new BST(15);
bst.right.left = new BST(13);
bst.right.left.right = new BST(14);
bst.right.right = new BST(22);

console.log(validateBst(bst));
