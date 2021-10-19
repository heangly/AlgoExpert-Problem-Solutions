import UIKit

class BinaryTree {
    var value: Int
    var left: BinaryTree?
    var right: BinaryTree?

    init(value: Int) {
        self.value = value
    }
}


// Time: O(n) | Space: O(1)
func nodeDepths(_ root: BinaryTree?, depth: Int = 0) -> Int {
    guard let root = root else { return 0 }
    return depth
        + nodeDepths(root.left, depth: depth + 1)
        + nodeDepths(root.right, depth: depth + 1)
}
