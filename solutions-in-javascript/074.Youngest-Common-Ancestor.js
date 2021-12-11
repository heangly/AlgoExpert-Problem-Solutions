class AncestralTree {
  constructor(name) {
    this.name = name
    this.ancestor = null
  }
}

const getYoungestCommonAncestor = (
  topAncestor,
  descendantOne,
  descendantTwo
) => {
  let h1 = getDepth(topAncestor, descendantOne)
  let h2 = getDepth(topAncestor, descendantTwo)

  if (h1 > h2) {
    return traverse(descendantOne, descendantTwo, h1, h2)
  } else {
    return traverse(descendantTwo, descendantOne, h2, h1)
  }
}

const getDepth = (top, curr) => {
  let h = 0
  while (curr !== top) {
    h++
    curr = curr.ancestor
  }
  return h
}

const traverse = (hightNode, lowNode, hightDepth, lowDepth) => {
  while (hightDepth > lowDepth) {
    hightNode = hightNode.ancestor
    hightDepth--
  }

  while (hightNode !== lowNode) {
    hightNode = hightNode.ancestor
    lowNode = lowNode.ancestor
  }

  return lowNode
}

const A = new AncestralTree('A')

const B = new AncestralTree('B')
B.ancestor = A
const C = new AncestralTree('C')
C.ancestor = A

const D = new AncestralTree('D')
D.ancestor = B
const E = new AncestralTree('E')
E.ancestor = B

const F = new AncestralTree('F')
F.ancestor = C
const G = new AncestralTree('G')
G.ancestor = C

const H = new AncestralTree('H')
H.ancestor = D
const I = new AncestralTree('I')
I.ancestor = D

console.log(getYoungestCommonAncestor(A, E, I))
