"""
*** Node Depths ***
The distance between a node in a Binary Tree and the tree's root is called the node's depth. Write a function that takes in a Binary
Tree and returns the sum of its nodes'depths. Each Binary Tree node has an integer value, a left child node, and a right child node.
Children nodes can either be Binary Tree nodes themselves or None / Null.

Sample Input:
tree =
              1
           /     \
         2        3
      /    \    /   \
    4       5  6    7
  /  \
8     9

Sample Output:
16
//The depth of the node with value 2 is 1.
//The depth of the node with value 3 is 1.
//The depth of the node with value 4 is 2.
//Summing all of these depths yields 16.
"""

class BinaryTree:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

# recursive approach
#O(n) time | O(h) space
def nodeDepths(root, depth=0):
    #handle base case of recursion
    if root is None:
        return 0
    return depth + nodeDepths(root.left, depth + 1) + nodeDepths(root.right, depth + 1)

# iterative approach
# O(n) time | O(h) space
# def nodeDepths(root):
#     sumOfDepths = 0
#     stack = [{"node": root, "depth":0}]
#     while len(stack) > 0:
#         nodeInfo = stack.pop()
#         node, depth = nodeInfo["node"], nodeInfo["depth"]
#         if node is None:
#             continue
#         sumOfDepths += depth
#         stack.append({"node": node.left, "depth": depth + 1})
#         stack.append({"node": node.right, "depth": depth + 1})

















