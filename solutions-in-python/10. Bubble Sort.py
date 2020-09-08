"""
*** Bubble Sort ***

Write a function that takes in an array of integers and return a sorted version of that array. Use the bubble sort
algorithm to sort that array

If you are unfamiliar with Bubble Sort, we recommend watching the Conceptual Overview section of this question's video
explanation before starting to code.

Sample Input:
array = [8, 5, 2, 9, 5, 6, 3]

Sample Output:
[2, 3, 5, 5, 6, 8, 9]
"""

# O(n^2) time | O(1) space
def bubbleSort(array):
    isSorted = False
    lastElement = len(array)-1
    while not isSorted:
        isSorted = True
        #we checking the current value and the next one.
        #instead of traversing throught entire array everytime, we only go to the last element and we keep reducing the
        #last element, because each iteration, the last element will be sorted already, which mean we can skip it
        for i in range(0, lastElement):
            if array[i] > array[i+1]:
                #swaping
                array[i], array[i+1] = array[i+1], array[i]
                isSorted = False

        lastElement -= 1
    return array

# # testing
# array = [2, 3, 5, 5, 6, 8, 9]
# print(bubbleSort(array))