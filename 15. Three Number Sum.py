"""
*** Three Number Sum ***

Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. The function
should find all triplets. The numbers in each triplet should be ordered in ascending order, and the triplets themeselves
should be ordered in ascending order with respect to the number they hold.

If no theree numbers sum up to the target sum, the function should return an empty array.

Sample Input:
array = [12, 3, 1, 2, -6, 5, -8, 6]
target sum = 0

Sample Output:
[[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]
"""

# O(n^2) time | O(n) space
def threeNumberSum(array, targetSum):
    array.sort()
    triplet = []
    for i in range(len(array)-2):
        left = i + 1
        right = len(array)-1
        #while they are not overlap each other
        while left < right:
            current_sum = array[i] + array[left] + array[right]
            if current_sum == targetSum:
                triplet.append([array[i], array[left], array[right]])
                left += 1
                right -= 1
            elif current_sum < targetSum:
                left += 1
            else:
                right -= 1

    return triplet


# def threeNumberSum(array, targetSum):
#     array.sort()
#     current_pointer = 0
#     answer = []
#
#     while current_pointer < len(array)-2:
#         #reset the left and right pointer every time the inner loop end
#         left_pointer = current_pointer + 1
#         right_pointer = len(array) - 1
#
#         while left_pointer < right_pointer:
#             sum = array[current_pointer] + array[left_pointer] + array[right_pointer]
#             if sum == targetSum:
#                 answer.append([array[current_pointer], array[left_pointer], array[right_pointer]])
#                 #when we find the target sum, we need to move both pointer.
#                 left_pointer += 1
#                 right_pointer -= 1
#             elif sum < targetSum:
#                 left_pointer += 1
#             else:
#                 right_pointer -= 1

#         current_pointer += 1
#     return answer


#test
array = [12, 3, 1, 2, -6, 5, -8, 6]
target = 0
print(threeNumberSum(array, target))

