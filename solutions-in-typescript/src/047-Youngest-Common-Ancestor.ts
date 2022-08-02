class AncestralTree {
  name: string
  ancestor: AncestralTree | null

  constructor(name: string) {
    this.name = name
    this.ancestor = null
  }
}

// Time: O(n) | Space: O(1)
const getYoungestCommonAncestor = (
  topAncestor: AncestralTree,
  descendantOne: AncestralTree,
  descendantTwo: AncestralTree
): AncestralTree => {
  const table: { [key: string]: boolean } = {}
  let current: AncestralTree | null = descendantOne
  while (current) {
    table[current.name] = true
    current = current.ancestor
  }

  current = descendantTwo
  while (current) {
    if (table[current.name]) return current
    current = current.ancestor
  }

  return topAncestor
}
