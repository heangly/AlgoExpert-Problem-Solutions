import Foundation

class BinaryTree {
    var value: Int
    var left: BinaryTree?
    var right: BinaryTree?

    init(value: Int) {
        self.value = value
    }
}


func nodeDepths(_ root: BinaryTree?) -> Int {
    return helper(node: root, runningDepth: 0)
}

func helper(node: BinaryTree?, runningDepth: Int) -> Int {
    guard let node = node else { return 0 }
    return runningDepth
        + helper(node: node.left, runningDepth: runningDepth + 1)
        + helper(node: node.right, runningDepth: runningDepth + 1)
}


var binaryTree = BinaryTree(value: 1)
binaryTree.left = BinaryTree(value: 2)
binaryTree.right = BinaryTree(value: 3)
binaryTree.left?.left = BinaryTree(value: 4)
binaryTree.left?.right = BinaryTree(value: 5)
binaryTree.left?.left?.left = BinaryTree(value: 8)
binaryTree.left?.left?.right = BinaryTree(value: 9)
binaryTree.right?.left = BinaryTree(value: 6)
binaryTree.right?.right = BinaryTree(value: 7)

print(nodeDepths(binaryTree))
