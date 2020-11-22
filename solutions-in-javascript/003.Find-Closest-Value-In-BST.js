// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const findClosestValueInBst = (tree, target) => {
  // Write your code here.
  let min = Infinity;
  let currNode = tree;
  while (currNode) {
    let diff = Math.abs(currNode.value - target);
    if (diff < Math.abs(min - target)) {
      min = currNode.value;
    }
    currNode = currNode.value < target ? currNode.right : currNode.left;
  }
  return min;
};
