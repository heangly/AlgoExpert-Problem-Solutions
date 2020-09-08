"""
*** Two Number Sum ***

Write a function that takes in a non-empty of distinct integers and an integers representing a target sum.
If any two numbers in the input array sum up to the target sum, the function should return them in an array.
If no two numbers sum up to the target sum. the function should return an empty array. Assume that there
will be at most one pair of numbers summing up to the target sum.

Sample input: [3, 5, -4, 8, 11, 1, -1, 6], 10
Sample output: [-1, 11]
"""
#Using 2 ForLoops
#Time: O(n^2) | Space: O(1)
def twoNumberSum1(array, target_sum):
    for outer in range(len(array)-1):
        for inner in range(outer+1, len(array)):
            if array[outer] + array[inner] is target_sum:
                return [array[outer], array[inner]]
    return []

#Using hash_table
#Time: 0(n) | Space: 0(n)
def twoNumberSum2(array, target_sum):
    hash_map = dict()
    for num in array:
        compliment = target_sum - num
        if compliment in hash_map:
            return [compliment, num]
        else:
            #store the num (not the compliment) in the hash_map
            hash_map[num] = True #the true value is optional. You can put whatever you want.
    return []

#Preferred!!!
#Using 2 pointers
#Time: 0(nlog(n)) | Space: 0(1)
def twoNumberSum3(array, target_sum):
    array.sort()
    left = 0
    right = len(array)-1

    #while left pointer and right pointer don't overlap to each other
    while left < right:
        current_sum = array[left] + array[right]
        if current_sum is target_sum:
            return [array[left], array[right]]
        elif current_sum < target_sum:
            left += 1
        else:
            right -= 1
    return []

#testing
arr = [3, 5, -4, 8, 11, 1, -1, 6]
target = 10
print(twoNumberSum3(arr, target))

