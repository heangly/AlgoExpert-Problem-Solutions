class Node {
  name: string
  children: Node[]

  constructor(name: string) {
    this.name = name
    this.children = []
  }

  addChild(name: string): Node {
    this.children.push(new Node(name))
    return this
  }

  // Time: O(v + e) | Space: O(v) space
  breadthFirstSearch(array: string[]) {
    const q: Node[] = [this]

    while (q.length) {
      const currNode = q.shift()!
      array.push(currNode.name)

      for (const child of currNode.children) {
        q.push(child)
      }
    }

    return array
  }
}

export {}
