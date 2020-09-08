"""
*** Insertion Sort ***
Write a function that takes in an array of integers and returns a sorted version of that array. Use insertion sort
Algorithm to sort the array.

Sample Input:
Array = [8, 5, 2, 9, 5, 6, 3]

Sample Output:
[2, 3, 5, 5, 6, 8, 9]
"""

# O(n^2) | O(1)space
def insertionSort(array):
    for i in range(1, len(array)):
        j = i
        while j > 0 and array[j] < array[j-1]:
            array[j], array[j-1] = array[j-1], array[j]
            j -= 1

    return array

#
# #testing
# arr = [8, 5, 2, 9, 5, 6, 3]
# print(insertionSort(arr))