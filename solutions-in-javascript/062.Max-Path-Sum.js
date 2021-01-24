class BST {
  constructor(value = null) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function maxPathSum(tree) {
  const [_, maxSum] = findMaxSum(tree);
  return maxSum;
}

function findMaxSum(tree) {
  if (tree === null) return [0, -Infinity];

  const [leftMaxSum, leftMaxPath] = findMaxSum(tree.left);
  const [rightMaxSum, rightMaxPath] = findMaxSum(tree.right);
  const maxChildSum = Math.max(leftMaxSum, rightMaxSum);

  const { value } = tree;
  const maxSumAsBranch = Math.max(maxChildSum + value, value);
  const maxSumAsRootNode = Math.max(
    leftMaxSum + value + rightMaxSum,
    maxSumAsBranch
  );
  const maxPathSum = Math.max(leftMaxPath, rightMaxPath, maxSumAsRootNode);

  return [maxSumAsBranch, maxPathSum];
}

const bst = new BST(1);
bst.left = new BST(2);
bst.left.left = new BST(4);
bst.left.right = new BST(5);
bst.right = new BST(3);
bst.right.left = new BST(6);
bst.right.right = new BST(7);

console.log(maxPathSum(bst));
