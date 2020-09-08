"""
*** Selection Sort ***

Write a function that takes in an array of integers and return a sorted version of that array. Use the selection sort
Algorithm to sort the array.

Sample Input
array = [8, 5, 2, 9, 5, 6, 3]

Sample Output
[2, 3, 5, 5, 6, 8, 9]
"""

#O(n^2) time | O(1) space
def selectionSort(array):
    for sorted_arr in range(len(array)):
        smallest = sorted_arr
        for unsorted_arr in range(sorted_arr+1, len(array)):
            if array[smallest] > array[unsorted_arr]:
                smallest = unsorted_arr

        array[smallest], array[sorted_arr] = array[sorted_arr], array[smallest]
    return array

    ##while loop approach
    # currentIndex = 0
    # while currentIndex < len(array)-1:
    #     smallestIndex = currentIndex
    #
    #     for i in range(currentIndex+1, len(array)):
    #         #finding the smallest number
    #         if array[smallestIndex] > array[i]:
    #             smallestIndex = i
    #
    #     #swapping
    #     array[smallestIndex], array[currentIndex] = array[currentIndex], array[smallestIndex]
    #
    #     #update currentIndex of the while loop
    #     currentIndex += 1
    #
    # return array

# #testing
# array = [8, 5, 2, 9, 5, 6, 3]
# print(selectionSort(array))