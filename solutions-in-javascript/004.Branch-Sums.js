class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const branchSums = (root) => {
  const output = [];
  const walk = (root, sumSofar) => {
    let currNode = root;
    if (!currNode) return;
    sumSofar += currNode.value;

    if (!currNode.left && !currNode.right) {
      output.push(sumSofar);
      return;
    }

    walk(currNode.left, sumSofar);
    walk(currNode.right, sumSofar);
  };

  walk(root, 0);
  return output;
};
