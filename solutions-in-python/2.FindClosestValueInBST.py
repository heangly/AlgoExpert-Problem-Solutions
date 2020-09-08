"""
*** Find Closest Value in BST ***

You are given a BST data structure consisting of BST nodes. Each BST node has an integer value stored in a property
called "value" and two children nodes stored in properties called "left" and "right", respectively. A node is said to be
a BST node if and only if it satisfies the BST property. Its value is strictly greater than the values of every node to
its left; its value is less than or equal to the values of every node to its right; and both of its children nodes are
either BST node themseleves or None(null) values. You are also given a target integer value; write a function that finds
the closet value to that target value contained in the BST. Assume that there will only be one closest value.

Sample input:
       10       ,12
      /  \
    5    15
   / \   / \
  2  5  13 22
 /       \
1        14

Sample output: 13
"""

#Using Recursive
# Average: O(log(n)) time | O(log(n)) space
# Worst: O(n) time | O(n) space
def findClosestValueInBst(tree, target):
    return helper(tree, target, float("inf"))

def helper(tree, target, closest):
    #base case
    if tree is None:
        return closest

    else:
        #updating the closest value
        if abs(target - closest) > abs(target - tree.value):
            closest = tree.value

        #traversing through the tree
        if target < tree.value:
            return helper(tree.left, target, closest)
        elif target > tree.value:
            return helper(tree.right, target, closest)
        else: #when the target value = tree.value
            return closest


# Using iterative
# Average: O(log(n)) time | O(log(n)) space
# Worst: O(n) time | O(1) space
def findClosestValueInBst1(tree, target):
    return helper(tree, target, float("inf"))

def helper1(tree, target, closest):
    current_node = tree

    #while we are not at the bottom of the tree(leaf)
    while current_node is not None:
        # updating the closest value
        if abs(target - closest) > abs(target - current_node.value):
            closest = current_node.value

        # traversing through the tree
        if target < current_node.value:
            current_node = current_node.left
        elif target > current_node.value:
            current_node = current_node.right
        else:  # when the target value = current_node.value
            break

    return closest























