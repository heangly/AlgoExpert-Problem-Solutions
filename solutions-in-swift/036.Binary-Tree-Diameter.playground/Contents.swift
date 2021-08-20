import Foundation

class BinaryTree {
    var value: Int
    var left: BinaryTree?
    var right: BinaryTree?

    init(value: Int) {
        self.value = value
        left = nil
        right = nil
    }
}

// O(n) time | O(h) space
class TreeInfo {
    var diameter: Int
    var height: Int

    init(_ diameter: Int, _ height: Int) {
        self.diameter = diameter
        self.height = height
    }
}

func binaryTreeDiameter(_ tree: BinaryTree) -> Int {
    return getTreeInfo(tree).diameter
}

func getTreeInfo(_ tree: BinaryTree?) -> TreeInfo {
    guard let tree = tree else { return TreeInfo(0, 0) }
    
    let leftTreeInfo = getTreeInfo(tree.left)
    let rightTreeInfo = getTreeInfo(tree.right)
    
    let longestPathThroughRoot = leftTreeInfo.height + rightTreeInfo.height
    let maxDiameterSoFar = max(leftTreeInfo.diameter, rightTreeInfo.diameter)
    let currentDiameter = max(longestPathThroughRoot, maxDiameterSoFar)
    let currentHeight = 1  + max(leftTreeInfo.height, rightTreeInfo.height)
    
    return TreeInfo(currentDiameter, currentHeight)
}



let bst = BinaryTree(value: 1)
bst.left = BinaryTree(value: 3)
bst.left?.left = BinaryTree(value: 7)
bst.left?.left?.left = BinaryTree(value: 8)
bst.left?.left?.left?.left = BinaryTree(value: 9)
bst.right = BinaryTree(value: 2)
bst.left?.right = BinaryTree(value: 4)
bst.left?.right?.right = BinaryTree(value: 5)
bst.left?.right?.right?.right = BinaryTree(value: 6)

print(binaryTreeDiameter(bst))

