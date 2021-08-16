import Foundation

class BST {
    var value: Int
    var left: BST?
    var right: BST?

    init(value: Int) {
        self.value = value
        left = nil
        right = nil
    }

    func insert(value: Int) -> BST {
        var currentNode: BST? = self

        while true {
            if let node = currentNode, value < node.value {
                if node.left == nil {
                    node.left = BST(value: value)
                    break
                } else {
                    currentNode = node.left
                }
            }
            else if let node = currentNode {
                if node.right == nil {
                    node.right = BST(value: value)
                    break
                } else {
                    currentNode = node.right
                }
            }
        }

        return self
    }

    func contains(value: Int) -> Bool {
        var currentNode: BST? = self
        while currentNode != nil {
            if let node = currentNode, value < node.value {
                currentNode = node.left
            }else if let node = currentNode, value > node.value {
                currentNode = node.right
            }else{
                return true
            }
        }
        return false
    }

    func remove(value: Int?, parentNode: BST?) -> BST {
        return self
    }
}



