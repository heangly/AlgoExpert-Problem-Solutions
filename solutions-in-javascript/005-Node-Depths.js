class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

const nodeDepths = (root, depth = 0) => {
  if (!root) {
    return 0
  }

  return (
    depth + nodeDepths(root.left, depth + 1) + nodeDepths(root.right, depth + 1)
  )
}

let nodes = new Node(1)
nodes.left = new Node(2)
nodes.right = new Node(3)
nodes.right.left = new Node(6)
nodes.right.right = new Node(7)
nodes.left.left = new Node(4)
nodes.left.right = new Node(5)
nodes.left.left.left = new Node(8)
nodes.left.left.right = new Node(9)

console.log(nodeDepths(nodes))
