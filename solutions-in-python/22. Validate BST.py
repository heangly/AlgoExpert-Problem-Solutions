"""
*** Validate BST ***

Write a function that takes in  a potentially invalid Binary Search Tree(BST) and returns a boolean representing whether
the BST is valid.

Each BST node has an integer value, a left child node, and a right child node. A node is said to be valid BST node if and
only if it satisfies the BST property: it value is strictly greater than the values of every node to its left; its value
is less than or equal to the values of every node to its right; and its children nodes are either valid BST nodes themselves
or None/null.

A BST is valid if and only if all of its nodes are valid BST nods.

Sample Input:
tree=     10
        /   \
      5      15
    /  \    /  \
   2    5  13  22
 /          \
1           14

Sample Output:
true
"""

#O(n) time | (O)d space
def validateBst(tree):
    return validateBstHelper(tree, float('-inf'), float('inf'))

def validateBstHelper(tree, minvalue, maxvalue):
    if tree is None:
        return True

    if tree.value < minvalue or tree.value >= maxvalue:
        return False

    leftIsValid = validateBstHelper(tree.left, minvalue, tree.value)
    return leftIsValid and validateBstHelper(tree.right, tree.value, maxvalue)












