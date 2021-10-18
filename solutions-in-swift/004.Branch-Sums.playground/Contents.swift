import UIKit

class BST {
    var value: Int
    var left: BST?
    var right: BST?

    init(value: Int) {
        self.value = value
    }
}

func branchSums(root: BST) -> [Int] {
    var sum = [Int]()
    helper(node: root, runningSum: 0, sums: &sum)
    return sum
}

func helper(node: BST?, runningSum: Int, sums: inout [Int]) {
    if let n = node {
        let currSum = runningSum + n.value
        if n.left == nil, n.right == nil {
            sums.append(currSum)
            return
        }
        helper(node: n.left, runningSum: currSum, sums: &sums)
        helper(node: n.right, runningSum: currSum, sums: &sums)
    }
}
