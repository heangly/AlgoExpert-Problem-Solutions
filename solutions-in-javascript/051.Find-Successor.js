class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

const inorderWalk = (tree, order = []) => {
  if (tree) {
    inorderWalk(tree.left, order);
    order.push(tree.value);
    inorderWalk(tree.right, order);
  }
  return order;
};

function findSuccessor(tree, node) {
  // Write your code here.
  const treeOrder = inorderWalk(tree);

  for (let i = 0; i < treeOrder.length; i++) {
    if (treeOrder[i] === node && i + 1 < treeOrder.length) {
      return treeOrder[i + 1];
    }
  }

  return null;
}

const root = new BinaryTree(1);
root.left = new BinaryTree(2);
root.left.parent = root;
root.right = new BinaryTree(3);
root.right.parent = root;
root.left.left = new BinaryTree(4);
root.left.left.parent = root.left;
root.left.right = new BinaryTree(5);
root.left.right.parent = root.left;
root.left.left.left = new BinaryTree(6);
root.left.left.left.parent = root.left.left;

console.log(findSuccessor(root, 5));
