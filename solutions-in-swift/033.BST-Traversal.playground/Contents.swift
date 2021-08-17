import Foundation

class BST {
    var value: Int?
    var left: BST?
    var right: BST?

    init(value: Int) {
        self.value = value
        self.left = nil
        self.right = nil
    }
}

//Time: O(n) | Space: O(n)
func inOrderTraversal(tree: BST?, array: inout [Int]) -> [Int] {
    if let currentNode = tree {
        inOrderTraversal(tree: currentNode.left, array: &array)
        
        if let value = currentNode.value {
            array.append(value)
        }
        
        inOrderTraversal(tree: currentNode.right, array: &array)
    }
    return array
}

//Time: O(n) | Space: O(n)
func preOrderTraversal(tree: BST?, array: inout [Int]) -> [Int] {
    if let currentNode = tree {
        
        if let value = currentNode.value {
            array.append(value)
        }
        
        preOrderTraversal(tree: currentNode.left, array: &array)
        preOrderTraversal(tree: currentNode.right, array: &array)
    }
    
    return array
}

//Time: O(n) | Space: O(n)
func postOrderTraversal(tree: BST?, array: inout [Int]) -> [Int] {
    if let currentNode = tree {
        postOrderTraversal(tree: currentNode.left, array: &array)
        postOrderTraversal(tree: currentNode.right, array: &array)
        
        if let value = currentNode.value {
            array.append(value)
        }
    }
    
    return array
}


let bst = BST(value: 10)
bst.left = BST(value: 5)
bst.right = BST(value: 15)
bst.right?.right = BST(value: 22)
bst.left?.left = BST(value: 2)
bst.left?.right = BST(value: 5)
bst.left?.left?.left = BST(value: 1)

var arr1 = [Int]()
var arr2 = [Int]()
var arr3 = [Int]()
print(preOrderTraversal(tree: bst, array: &arr1))
print(inOrderTraversal(tree: bst, array: &arr2))
print(postOrderTraversal(tree: bst, array: &arr3))
