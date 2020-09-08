"""
*** Branch Sums ***

Write a function that takes in a Binary Tree and return a list of its branch sums ordered from leftmost branch sum to rightmost branch sum.
A branch sum is the sum of all values in a Binary Tree branch. A Binary Tree branch is a path of nodes in a tree that starts at the root
node and ends at any leaf node. Each Binary Tree node has an integer value, a left child node, and a right child node. Children nodes can
either be Binary Tree nodes themselves or None / null.

Sample Input
Tree =     1
        /    \
      2      3
    /  \    / \
   4    5  6  7
 / \   /
8  9  10

Sample Output:
[15, 16, 18, 10, 11]
"""

# This is the class of the input root. Do not edit it.
# 0(n) time | 0(n) space
class BinaryTree:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

def branchSums(root):
    my_sum = []
    helper(root, 0, my_sum)
    return my_sum

def helper(node, runningSum, my_sum):
    new_sum = runningSum + node.value

    if node.left is None and node.right is None:
        my_sum.append(new_sum)
        return

    if node.left:
        helper(node.left, new_sum, my_sum)
    if node.right:
        helper(node.right, new_sum, my_sum)