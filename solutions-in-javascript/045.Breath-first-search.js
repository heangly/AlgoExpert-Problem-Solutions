class Node {
  constructor(name) {
    this.name = name
    this.children = []
  }

  addChild(name) {
    this.children.push(new Node(name))
    return this
  }

  breadthFirstSearch(array) {
    const queue = [this]

    while (queue.length) {
      const current = queue.shift()
      array.push(current.name)
      for (const child of current.children) {
        queue.push(child)
      }
    }
    return array
  }
}
