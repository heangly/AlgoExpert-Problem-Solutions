"""
*** Smallest Difference ***

Wrtie a function that takes in two non-empty arrays of integers, finds the pair of numbers (one from each array) whose absolute
difference is closest to zero, and returns an array containing these two numbers, with the number from the first array in the
first position.
You can assuem that there will only be one pair of numbers with the smallest difference.

Sample Input:
arrayOne = [-1, 5, 10, 20, 28, 3]
arrayTwo = [26, 134, 135, 15, 17]

Sample Output:
[28, 26]
"""

#O(nlong(n) + mlong(m)) time | O(1) space
def smallestDifference(arrayOne, arrayTwo):
    arrayOne.sort()
    arrayTwo.sort()
    idxOne = 0
    idxTwo = 0
    smallest = float('inf')
    current = float('inf')
    smallestPair = []

    while idxOne < len(arrayOne) and idxTwo < len(arrayTwo):
        firstNum = arrayOne[idxOne]
        secondNum = arrayTwo[idxTwo]
        if firstNum < secondNum:
            current = secondNum - firstNum
            idxOne += 1
        elif firstNum > secondNum:
            current = firstNum - secondNum
            idxTwo += 1
        #when they are = each other
        else:
            return [firstNum, secondNum]

        if smallest > current:
            smallest = current
            smallestPair = [firstNum, secondNum]

    return smallestPair

# two forloop approach
# def smallestDifference(arrayOne, arrayTwo):
#     smallest = 10
#     answer = [0, 0]
#
#     for outer in arrayOne:
#         for inner in arrayTwo:
#             difference = outer - inner
#             if abs(difference) < smallest:
#                 answer[0] = outer
#                 answer[1] = inner
#
#     return answer

#test
arrayOne = [-1, 5, 10, 20, 28, 3]
arrayTwo = [26, 134, 135, 15, 17]
# arrayOne, arrayTwo = [-1, 5, 10, 20, 3], [26, 134, 135, 15, 17]
print(smallestDifference(arrayOne, arrayTwo))
