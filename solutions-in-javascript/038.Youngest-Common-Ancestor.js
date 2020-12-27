class AncestralTree {
  constructor(name) {
    this.name = name;
    this.ancestor = null;
  }
}

function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
  // Write your code here.
  let depthOne = getDescendentDepth(descendantOne, topAncestor);
  let depthTwo = getDescendentDepth(descendantTwo, topAncestor);

  if (depthOne > depthTwo) {
    return backtrack(descendantOne, descendantTwo, depthOne - depthTwo);
  } else {
    return backtrack(descendantTwo, descendantOne, depthTwo - depthOne);
  }
}

function backtrack(lowDescendent, highDescendent, diff) {
  while (diff > 0) {
    lowDescendent = lowDescendent.ancestor;
    diff--;
  }
  while (lowDescendent !== highDescendent) {
    lowDescendent = lowDescendent.ancestor;
    highDescendent = highDescendent.ancestor;
  }
  return lowDescendent;
}

function getDescendentDepth(descendent, topAncestor) {
  let depth = 0;
  while (descendent !== topAncestor) {
    depth++;
    descendent = descendent.ancestor;
  }
  return depth;
}
