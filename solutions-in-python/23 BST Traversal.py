"""
*** BST Traversal ***
Write three function that take in a Binary Search Tree (BST) and an empty array, traverse the BST, add its nodes' values
to the input array, and return that array. The three functions should traverse the BST using the in-order, pre-order, and
post-order-tree-traversal techniques, respectively.

Each BST node has an integer value, a left child node, and a right child node, A node is said to be a valid BST node if
and only if it satisfies the BST propert: its value is strictly greater than the values of every node to its left; its
value is less than or equal to the values of every node to its right; and its children nodes are either valid BST node
themselves or None/null.

Sample Input:
tree=     10
        /   \
      5      15
    /  \       \
   2    5      22
 /
1
array = []

Sample Output:
inOrderTraverse: [1, 2, 5, 5, 10, 15, 22]
preOrderTraverse: [10, 5, 2, 1, 5, 15, 22]
postOrderTraverse: [1, 2, 5, 5, 22, 15, 10]
"""

#O(n) time | O(n) space
def inOrderTraverse(tree, array):
    if tree is not None:
        inOrderTraverse(tree.left, array)
        array.append(tree.value)
        inOrderTraverse(tree.right, array)
    return array

def preOrderTraverse(tree, array):
    if tree is not None:
        array.append(tree.value)
        preOrderTraverse(tree.left, array)
        preOrderTraverse(tree.right, array)
    return array

def postOrderTraverse(tree, array):
    if tree is not None:
        postOrderTraverse(tree.left, array)
        postOrderTraverse(tree.right, array)
        array.append(tree.value)
    return array













