"""
*** BST Construction ***

Write a BST class for a Binary Search Tree. The class should support:
- Inserting Values with insert method.
- Removing values with the remove method; this method should only remove the first instance of a given value.
- Searching for values with the contains method.

Note: you cannot move values from a single-node tree. In other words, calling the remove method on a single-node tree
should simply not do anything.

Each BST node has an integer value, a left child node, and a right child node. A node is said to be a valid BST node if
and only if it satisfies the BST property: its value is strictly greater than the values of every node to its left; its
value is less than or equal to the values of every node to its right; and its children nodes are either valid BST nodes
themselves or None/null.

Sample Usage
// Assume the following BST has already been created:
          10
        /   \
      5      15
    /  \    /  \
   2    5  13  22
 /          \
1           14

//All operations below are performed sequentially
insert(12):
          10
        /   \
      5      15
    /  \    /  \
   2    5  13  22
 /        / \
1       12   14

remove(10):
          12
        /   \
      5      15
    /  \    /  \
   2    5  13  22
 /          \
1           14

contains(15): true
"""

class BST:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

    #Average O(Log(n)) time | O(1) space
    #Worst: O(n) time | O(1) space
    def insert(self, value):
        current_node = self
        while True:
            if value < current_node.value:
                if current_node.left is None:
                    current_node.left = BST(value)
                    break
                else:
                    current_node = current_node.left
            else:
                if current_node.right is None:
                    current_node.right = BST(value)
                    break
                else:
                    current_node = current_node.right
        return self

    def contains(self, value):
        current_node = self
        while current_node is not None:
            if value < current_node.value:
                current_node = current_node.left
            elif value > current_node.value:
                current_node = current_node.right
            else:
                return True
        return False

    def remove(self, value, parent_node = None):
        current_node = self
        while current_node is not None:
            if value < current_node.value:
                parent_node = current_node
                current_node = current_node.left
            elif value > current_node.value:
                parent_node = current_node
                current_node  = current_node.right
            else:
                if current_node.left is not None and current_node.right is not None:
                    current_node.value = current_node.right.getMinValue()
                    current_node.right.remove(current_node.vale, current_node)
                elif parent_node is None:
                    if current_node.left is not None:
                        current_node.value = current_node.left.value
                        current_node.right = current_node.left.right
                        current_node.left = current_node.left.left
                    elif current_node.right is not None:
                        current_node.value = current_node.right.value
                        current_node.left  = current_node.right.left
                        current_node.right  = current_node.right.right
                    else:
                        current_node.value = None
                elif parent_node.left == current_node:
                    parent_node.left = current_node.left if current_node.left is not None else current_node.right
                elif parent_node.right == current_node:
                    parent_node.right = current_node.left if current_node.left is not None else current_node.right
                break

        return self

    def getMinValue(self):
        current_node = self
        while current_node.left is not None:
            current_node = current_node.left
        return current_node.value

























