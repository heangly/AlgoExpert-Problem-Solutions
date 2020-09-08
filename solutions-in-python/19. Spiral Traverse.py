"""
*** Spiral Traverse ***

Write a function that takes in an n x m two dimension array (that can be square shaped when n === m) and returns a
one-dimensional array of all the array's elements in spiral order.
Spiral orders starts at the top left corner of the two dimensional array, goes to the right, and proceeds in a spiral
pattern all the way until every element has been visited.

Sample Input:
array = [
[1, 2, 3, 4],
[12, 13, 14, 5],
[11, 16, 15, 6],
[10, 9, 8, 7]
]

Sample Output
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
"""

#O(n) time | O(n) space
def spiralTraverse(matrix):
    result = []
    startRow, endRow = 0, len(array) - 1
    startCol, endCol = 0, len(array[0]) - 1

    while startRow <= endRow and startCol <= endCol:
        for col in range(startCol, endCol):
            result.append(array[startRow][col])

        for row in range(startRow + 1, endRow + 1):
            result.append(array[row][endCol])

        for col in reversed(range(startCol, endCol)):
            result.append(array[endRow][col])

        for row in reversed(range(startRow + 1, endRow)):
            result.append(array[row][startCol])

        startRow += 1
        endRow -= 1
        startCol += 1
        endCol -= 1
    return result

#test
array = [
[1, 2, 3, 4],
[12, 13, 14, 5],
[11, 16, 15, 6],
[10, 9, 8, 7]
]
print(spiralTraverse(array))




















