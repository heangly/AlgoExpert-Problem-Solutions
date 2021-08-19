import Foundation

class BinaryTree {
    var value: Int?
    var left: BinaryTree?
    var right: BinaryTree?
}

// Time: O(n) | Space: O(d)
func invertBinaryTree(tree: BinaryTree?) {
    if let tree = tree {
        (tree.left, tree.right) = (tree.right, tree.left)
        invertBinaryTree(tree: tree.left)
        invertBinaryTree(tree: tree.right)
    }
}


