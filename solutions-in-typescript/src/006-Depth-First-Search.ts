class Node1 {
  name: string
  children: Node1[]

  constructor(name: string) {
    this.name = name
    this.children = []
  }

  addChild(name: string) {
    this.children.push(new Node1(name))
    return this
  }

  // Time: O(v + e) | Space: O(v) where v is the number of vertices and e is the number of edges
  depthFirstSearch(array: string[]) {
    array.push(this.name)
    for (const child of this.children) {
      child.depthFirstSearch(array)
    }
    return array
  }
}

export {}
