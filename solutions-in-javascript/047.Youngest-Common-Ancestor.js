//  Time: O(D), Space: O(1)
// This is an input class. Do not edit.
class AncestralTree {
  constructor(name) {
    this.name = name
    this.ancestor = null
  }
}

function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
  const depthOne = getDescendantDepth(descendantOne, topAncestor)
  const depthTwo = getDescendantDepth(descendantTwo, topAncestor)
  if (depthOne > depthTwo) {
    return backtrack(descendantOne, descendantTwo, depthOne - depthTwo)
  }
  return backtrack(descendantTwo, descendantOne, depthTwo - depthOne)
}

const getDescendantDepth = (descendant, topAncestor) => {
  let depth = 0
  while (descendant !== topAncestor) {
    depth++
    descendant = descendant.ancestor
  }
  return depth
}

const backtrack = (lowerDescendant, higherDescendant, diff) => {
  while (diff > 0) {
    lowerDescendant = lowerDescendant.ancestor
    diff--
  }
  while (lowerDescendant !== higherDescendant) {
    lowerDescendant = lowerDescendant.ancestor
    higherDescendant = higherDescendant.ancestor
  }
  return lowerDescendant
}
