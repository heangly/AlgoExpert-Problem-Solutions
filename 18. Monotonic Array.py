"""
*** Monotonic Array ***
Write a function that takes in an array of integers and returns a boolean representing whether the array is monotonic.
An array is said to be monotonic if its element, from left to right, are entirely non-increaseing or entirely non-decreasing

Sample Input:
array = [-1, -5. -10. -1100, -1100, -1101, -1102, -9001]

Sample output:
true
"""

#O(n) time | O(1) space
#first approach
def isMonotonic(array):
    goingUp = False
    goingDown = False
    flat = True

    #handle edge case
    # when the array is empty or only 1 element
    if not array or len(array) == 1:
        return True

    for i in range(1, len(array)):
        #when decreasing
        if array[i] < array[i-1]:
            goingDown = True
            flat = False
        #when increasing
        if array[i] > array[i - 1]:
            goingUp = True
            flat = False

    #when neither the decreasing nor increasing condition reaches.
    if flat:
        return True
    #if going to only 1 direction (NOT both going up and down at the same time)
    if goingUp != goingDown:
        return True
    #otherwise, if going up and down at the same time
    return False

#second approach
#O(n) time | O(1) space
# def isMonotonic(array):
#     if len(array) <= 2:
#         return True
#     direction = array[1] - array[0]
#     for i in range(2, len(array)):
#         if direction == 0:
#             direction = array[i] - array[i-1]
#             continue
#         if directionHelper(direction, array[i-1], array[i]):
#             return False
#     return True
#
# def directionHelper(direction, prev, curr):
#     difference = curr - prev
#     #if it breaks the direction
#     if direction > 0:
#         return difference < 0
#     return difference > 0


#test
array = [-1, -5. -10, -1100, -1100, -1101, -1102, -9001]
array1 = []
array2 = [-1, -1, -1, -1]
print(isMonotonic(array2))