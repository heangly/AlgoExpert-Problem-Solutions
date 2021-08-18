import Foundation

class BST {
    var value: Int
    var left: BST?
    var right: BST?

    init(value: Int) {
        self.value = value
    }

    func insert(value: Int) {
        if value < self.value {
            if let left = self.left {
                left.insert(value: value)
            } else {
                left = BST(value: value)
            }
        } else {
            if let right = self.right {
                right.insert(value: value)
            } else {
                right = BST(value: value)
            }
        }
    }
}


//O(n) time | O(n) space
func minHeightBST(_ array: [Int]) -> BST? {
    return minHeightBSTHelper(array, startIdx: 0, endIdx: array.count - 1)
}

func minHeightBSTHelper(_ array: [Int], startIdx: Int, endIdx: Int) -> BST? {
    if endIdx < startIdx { return nil }
    let mid = (startIdx + endIdx) / 2
    let bst = BST(value: array[mid])
    
    bst.left = minHeightBSTHelper(array, startIdx: startIdx, endIdx: mid - 1)
    bst.right = minHeightBSTHelper(array, startIdx: mid + 1, endIdx: endIdx)
    
    return bst
}

func inorderTraversal(bst: BST?) {
    if let currentBST = bst {
        inorderTraversal(bst: currentBST.left)
        print(currentBST.value)
        inorderTraversal(bst: currentBST.right)
    }
}

let array = [1, 2, 5, 7, 10, 13, 14, 15, 22]
let myBST = minHeightBST(array)
inorderTraversal(bst: myBST)
