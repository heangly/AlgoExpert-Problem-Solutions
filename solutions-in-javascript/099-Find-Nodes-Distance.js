class BinaryTree {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

const findNodesDistanceX = (tree, target, k) => {
  if (!tree) return []
  const node = findTarget(tree, null, target)
  const res = []
  findAllKApart(node, k, res)
  return res
}

const findTarget = (root, parent, target) => {
  if (!root) return null

  root.parent = parent
  if (root.value === target) {
    return root
  }

  return (
    findTarget(root.left, root, target) || findTarget(root.right, root, target)
  )
}

const findAllKApart = (root, k, res) => {
  if (!root || root.visited) return res
  if (k === 0) {
    res.push(root.value)
    return res
  }
  root.visited = true
  findAllKApart(root.left, k - 1, res)
  findAllKApart(root.right, k - 1, res)
  findAllKApart(root.parent, k - 1, res)
  return res
}

const bst = new BinaryTree(1)
bst.left = new BinaryTree(2)
bst.left.left = new BinaryTree(4)
bst.left.right = new BinaryTree(5)
bst.right = new BinaryTree(3)
bst.right.right = new BinaryTree(6)
bst.right.right.left = new BinaryTree(7)
bst.right.right.right = new BinaryTree(8)

console.log(findNodesDistanceX(bst, 3, 2))
