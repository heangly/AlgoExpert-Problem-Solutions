import UIKit

class BST {
    var value: Int
    var left: BST?
    var right: BST?

    init(value: Int) {
        self.value = value
        left = nil
        right = nil
    }
}

// Time: O(log(n) | Space: O(1)
func findClosestValueInBST(tree: BST?, target: Int) -> Int {
    var smallestDiff = Int.max
    var smallestValue = Int.max
    var node = tree

    while let currNode = node {
        let diff = abs(currNode.value - target)
        if diff == 0 {
            return currNode.value
        } else if diff < smallestDiff {
            smallestDiff = diff
            smallestValue = currNode.value
        }
        node = target > currNode.value ? currNode.right : currNode.left
    }

    return smallestValue

}
