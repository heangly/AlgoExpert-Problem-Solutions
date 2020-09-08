"""
Move Element To End

You're given an array of integers and an integer. Write a function that moves all instances of that integer in the array
to the end of the array and returns the array.

The function should perform this in place(i.e., it should mutate the input array) and doesn't need to maintain the order
of the other integers.

Sample Input:
array = [2, 1, 2, 2, 2, 3, 4, 2]
toMove = 2

Sample Output:
[1, 3, 4, 2, 2, 2, 2, 2]
"""

#O(n) time | O(n) space
def moveElementToEnd(array, toMove):
    i = 0
    j = len(array) - 1

    while i < j:
        while array[j] == toMove and i < j:
            j -= 1
        if array[i] == toMove:
            array[i], array[j] = array[j], array[i]
        i += 1
    return array

#test
array = [2, 1, 2, 2, 2, 3, 4, 2]
toMove = 2
print(moveElementToEnd(array, toMove))