"""
*** Depth-first Search ***

You are given a Node class that has a name and an array of optional children nodes. when put together, node form a simple tree
like structure. Implement depthFirstSearch method on the Node class, which takes in an empty array, traverses the tree using
the Depth-first Search approach(specifically navigating the tree from the left to right), store all the nodes' names in the
input array, and return it. If you are unfamiliar with Depth-first Search, we recommend watching the Conceptual Overview section
of the this question's video explanation before starting to code.

Sample Input:
graph =        A
            /  |  \
           B   C   D
          / \     / \
         E  F    G  H
           / \    \
          I  J     K

Sample Output
['A', 'B', 'E', 'F', 'I', 'J', 'C', 'D', 'G', 'K', 'H']
"""
# Do not edit the class below except
# for the depthFirstSearch method.
# Feel free to add new properties
# and methods to the class.
class Node:
    def __init__(self, name):
        self.children = []
        self.name = name

    def addChild(self, name):
        self.children.append(Node(name))
        return self

    # 0(v+e) time | O(v) space
    def depthFirstSearch(self, array):
        # Write your code here.
        array.append(self.name)
        for child in self.children:
            child.depthFristSearch(array)
        return array

