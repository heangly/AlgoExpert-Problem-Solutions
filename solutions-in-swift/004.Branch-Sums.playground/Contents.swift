import Foundation

class BST {
    var value: Int
    var left: BST?
    var right: BST?

    init(value: Int) {
        self.value = value
    }
}

//Time: O(n) | Space: O(1)
func branchSums(root: BST) -> [Int] {
    var answerArray = [Int]()

    helper(node: root, runningSum: 0, answerArray: &answerArray)
    return answerArray
}

func helper(node: BST?, runningSum: Int, answerArray: inout [Int]) {
    if let n = node {
        let currentSum = n.value + runningSum
        
        if n.left == nil , n.right == nil {
            answerArray.append(currentSum)
            return
        }
        
        helper(node: n.left, runningSum: currentSum, answerArray: &answerArray)
        helper(node: n.right, runningSum: currentSum, answerArray: &answerArray)
    }

}



var bst = BST(value: 1)
bst.left = BST(value: 2)
bst.right = BST(value: 3)
bst.left?.left = BST(value: 4)
bst.left?.right = BST(value: 5)
bst.left?.left?.left = BST(value: 8)
bst.left?.left?.right = BST(value: 9)
bst.left?.right?.left = BST(value: 10)
bst.right?.left = BST(value: 6)
bst.right?.right = BST(value: 7)

print(branchSums(root: bst))
