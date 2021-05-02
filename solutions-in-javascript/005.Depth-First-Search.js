class Node {
  constructor(name) {
    this.name = name
    this.children = []
  }

  addChild(name) {
    this.children.push(new Node(name))
    return this
  }

  // Time: O(V + E) | Space: O(V)
  depthFirstSearch(array) {
    // Write your code here.
    array.push(this.name)
    for (const child of this.children) {
      child.depthFirstSearch(array)
    }
    return array
  }
}
