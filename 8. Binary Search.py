"""
** Binary Search ***

Write a function that takes in a sorted array of integers as welll as target integer. The function should use the Binary
Search Algorithm to determine if the target integer is contained in the array and should return its index if it is,
otherwise -1.

Sample Input:
array = [0, 1, 21, 33 ,45, 45, 61, 71, 72, 73]
target = 33

Sample Output:
3
"""

#Iterative1
#O(Log(n)) time | O(log(1) space
def binarySearch(array, target):
    return helper(array, target, 0, len(array)-1)

def helper(array, target, left, right):
    while left <= right:
        middle = (left + right)//2
        if target is array[middle]:
            return middle
        elif target < array[middle]:
            right = middle - 1
        else:
            left = middle + 1
    return -1

#Iterative2
#O(Log(n)) time | O(log(1) space
# def binarySearch(array, target):
#     left = 0
#     right = len(array)-1
#
#     while not(left > right):
#         middle = (left + right) // 2
#
#         if target is array[middle]:
#             return middle
#         else:
#             if target > array[middle]:
#                 left = middle + 1
#             else:
#                 right = middle - 1
#     return -1


# #Recursive
# #O(Log(n)) time | O(log(n)) space
# def binarySearch(array, target):
#     return helper(array, target, 0, len(array)-1)
#
# def helper(array, target, left, right):
#     if left > right:
#         return -1
#     else:
#         middle = (left + right)//2
#         if target is array[middle]:
#             return middle
#         elif target < array[middle]:
#             return helper(array, target, left, middle-1)
#         else:
#             return helper(array, target, middle+1, right)