import Foundation

class BST {
    var value: Int
    var left: BST?
    var right: BST?

    init(value: Int) {
        self.value = value
        self.left = nil
        self.right = nil
    }
}

// Time: O(log(n)) Space: O(1)
func findClosestValueInBST(tree: BST?, target: Int) -> Int {
    var smallestDiff = Int.max
    var smallestValue = Int.max
    var currentNode = tree

    while currentNode != nil {
        if let node = currentNode {
            let diff = abs(node.value - target)

            if diff == 0 {
                return node.value
            } else if diff < smallestDiff {
                smallestDiff = diff
                smallestValue = node.value
            }

            currentNode = node.value < target ? node.right : node.left
        }
    }

    return smallestValue
}

func inorder(_ node: BST?) {
    guard let _ = node else { return }
    inorder(node?.left)
    print("\(node!.value)")
    inorder(node?.right)
}


var bst = BST(value: 10)
bst.left = BST(value: 5)
bst.right = BST(value: 15)
bst.left?.left = BST(value: 2)
bst.left?.right = BST(value: 5)
bst.right?.left = BST(value: 13)
bst.right?.right = BST(value: 22)
bst.left?.left?.left = BST(value: 1)
bst.right?.left?.right = BST(value: 14)

print(findClosestValueInBST(tree: bst, target: 12))
