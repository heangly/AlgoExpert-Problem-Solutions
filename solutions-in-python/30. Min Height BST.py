"""
*** Min Height BST ***

Write a function that takes in a non-empty sorted array of distinct integers, constructs a BST from the integers, and returns the root
of BST.

The function should minimize the height of BST.
You have been provided with a BST class that you will have to use to construct the BST.

Each BST node has an integer value, a left child node, and a right child node. A node is said to be a valid BST node if and only if
it satifies the BST property: its value is strictly greater than the values of the every node to its left; its value is less than or
equal to the values of every node to its right; and its children nodes are either valid BST nodes themselves or None/null.

A BST is valid if and only if all of its nodes are valid BST nodes.

Note that the BST class already has an insert method which you can use if you want.

Sample Input:
array = [1, 2, 5, 7, 10, 13, 14, 15, 22]

Sample Output:
        10
      /   \
    2      14
  /  \    /  \
 1    5  13  15
       \       \
       7       22

This is one example of a BST with min height that you could create from the input array
You could create other BST with min height from the same array; for example:
        10
      /    \
     5      15
   /  \    /  \
  2    7  13  22
 /         \
1          14
"""

# Default Class
class BST:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

    def insert(self, value):
        if value < self.value:
            if self.left is None:
                self.left = BST(value)
            else:
                self.left.insert(value)
        else:
            if self.right is None:
                self.right = BST(value)
            else:
                self.right.insert(value)

############## Start here ##############
def minHeightBst(array):
    return constructMinHeightBst(array, None, 0, len(array)-1)

def constructMinHeightBst(array, bst, startIdx, endIdx):
    if endIdx < startIdx:
        return
    midIdx = (startIdx + endIdx) // 2

    newBstNode = BST(array[midIdx])
    if bst is None:
        bst = newBstNode
    else:
        if array[midIdx] < bst.value:
            bst.left = newBstNode
            bst = bst.left
        else:
            bst.right = newBstNode
            bst = bst.right

    constructMinHeightBst(array, bst, startIdx, midIdx - 1)
    constructMinHeightBst(array, bst, midIdx + 1, endIdx)

    return bst




# O(nlog(n)) time | O(n) space
# def minHeightBst(array):
#     return constructMinHeightBst(array, None, 0, len(array)-1)
#
# def constructMinHeightBst(array, bst, startIdx, endIdx):
#     if endIdx < startIdx:
#         return
#     midIdx = (startIdx + endIdx) // 2
#     valueToAdd = array[midIdx]
#
#     if bst is None:
#         bst = BST(valueToAdd)
#     else:
#         bst.insert(valueToAdd)
#
#     constructMinHeightBst(array, bst, startIdx, midIdx - 1)
#     constructMinHeightBst(array, bst, midIdx + 1, endIdx)
#
#     return bst


# testing
array = [1, 2, 5, 7, 10, 13, 14, 15, 22]
minHeightBst(array)