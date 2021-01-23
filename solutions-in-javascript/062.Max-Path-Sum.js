class BST {
  constructor(value = null) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function maxPathSum(tree) {
  // Write your code here.
  const ans = [tree.value, tree.left.value, tree.right.value];
  let rootLeft = tree.left;
  let rootRight = tree.right;

  while (rootLeft.right) {
    ans.push(rootLeft.right.value);
    rootLeft = rootLeft.right;
  }

  while (rootRight.right) {
    ans.push(rootRight.right.value);
    rootRight = rootRight.right;
  }
  return ans.reduce((acc, curr) => acc + curr, 0);
}

// const inorderWalk = (root) => {
//   if (root) {
//     inorderWalk(root.left);
//     console.log(root.value);
//     inorderWalk(root.right);
//   }
// };

const bst = new BST(1);
bst.left = new BST(2);
bst.left.left = new BST(4);
bst.left.right = new BST(5);
bst.right = new BST(3);
bst.right.left = new BST(6);
bst.right.right = new BST(7);

console.log(maxPathSum(bst));
