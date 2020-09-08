"""
*** Find Three Largest Numbers ***

Write a function that takes in an arrayof integers and, without sorting the input array, returns a sorted array of the
three largest integers in the input array

The function should return duplicate integers if necessary; for example, it should return [10, 10, 12] for an input array
of[10, 5, 9, 10, 12].

Sample Input:
array = [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]

Sample Output:
[18, 141, 541]
"""


#O(n) time | O(1) space
def findThreeLargestNumbers(array):
    threeLargest = [None, None, None]
    for num in array:
        largest_helper(threeLargest, num)
    return threeLargest

def largest_helper(threeLargest, num):
    if threeLargest[2] is None or num > threeLargest[2]:
        shift_helper(threeLargest, num, 2)

    elif threeLargest[1] is None or num > threeLargest[1]:
        shift_helper(threeLargest, num, 1)

    elif threeLargest[0] is None or num > threeLargest[0]:
        shift_helper(threeLargest,num, 1)

def shift_helper(array, num, idx):
    for i in range(0, idx+1):
        if i == idx:
            array[i] = num
        else:
            array[i] = array[i+1]

print(findThreeLargestNumbers([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]))