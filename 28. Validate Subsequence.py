"""
*** Validate Subsequence ***

Given two non-empty arrays of integers, write a function that determines whether the second array is a subsequence of
the first one.

A subsequence of an array is a set of numbers that aren't necessarily adjacent in the array but there are in the same
order as they appear in the array. For instance, the number [1, 3, 4] form a subsequence of the array [1, 2, 3, 4], and so
do the numbers [2, 4]. Note that a single number in an array and the array itself are both valid subsequences of the array.

Sample Input:
array = [5, 1, 22, 25, 6, -1, 8, 10]
sequence  = [1, 6, -1, 10]

Sample Output:
true
"""

# Time = O(N) Space= O(1)
def isValidSubsequence(array, sequence):
    arr_idx = 0
    seq_idx = 0
    while arr_idx < len(array) and seq_idx < len(sequence):
        if array[arr_idx] == sequence[seq_idx]:
            seq_idx +=1
        arr_idx += 1
    return seq_idx == len(sequence)

# my approach
# Time = O(N) Space= O(N)
# def isValidSubsequence(array, sequence):
#     result = list()
#     for idx in range(len(array)):
#         if array[idx] in sequence:
#             result.append(array[idx])
#     return result == sequence



#testing
array = [5, 1, 22, 25, 6, -1, 8, 10]
sequence  = [1, 6, -1, 10]
print(isValidSubsequence(array, sequence))