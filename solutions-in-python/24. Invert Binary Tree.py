"""
*** Invert Binary Tree ***
  Write a function that takes in a Binary Tree and invert it. In other words, the function should swap every left node in the tree for its
corresponding right node.
  Each Binary Tree node has an integer value, a left child node, and a right child node. Children nodes can either be Binary Tree nodes
themselves or None/null

Sample Input:
tree=     1
        /   \
      2      3
    /  \    /  \
   4   5   6    7
 /  \
8   9

Sample Output:
          1
        /   \
      3      2
    /  \    /  \
   7   6   5    4
              /   \
             9    8
"""
# #O(n) time | O(n) space
def invertBinaryTree(tree):
  queue = [tree]
  while len(queue):
    current = queue.pop(0)
    if current is None:
      continue
    current.left, current.right = current.right, current.left
    queue.append(current.left)
    queue.append(current.right)

#recursive approach
# O(n) time | O(d) space
# def invertBinaryTree(tree):
#     if tree is None:
#       return
#     tree.left, tree.right = tree.right, tree.left
#     invertBinaryTree(tree.left)
#     invertBinaryTree(tree.right)











