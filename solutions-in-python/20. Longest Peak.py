"""
*** Longest Peak ***
write a function that takes in an array of integers and returns the length of the longest peak in the array. A peak is
defined as adjacent integers in the array that are strictly increasing until they reach a tip(the highest value in the peak)
, at which point they become strictly decreasing. At least three integers are required to form a peak.
For example, the integers 1, 4, 10, 2 form a peak, but the integer 4, 0, 10 do not and neither do the integer 1, 2, 2, 0.
Similarity, the integers 1, 2, 3 do not form a peak because there are not any strictly decreasing integer after the 3.

Sample Input:
array = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]

Sample Output
6// 0, 10, 6, 5, -1, -3
"""

#O(n) time | O(1) space
def longestPeak(array):
    longest_length = 0
    curr = 1
    end = len(array)-1

    while curr < end:
        isPeak = array[curr] > array[curr-1] and array[curr] > array[curr+1]
        #if peak is not yet found
        if not isPeak:
            curr += 1
            continue
        #if peak is found -> we expand it to both direction to find out the length
        #checking left length
        left_index = curr - 2
        while left_index >= 0 and array[left_index] < array[left_index + 1]:
            left_index -= 1
        #checking right length
        right_index = curr + 2
        while right_index < len(array) and array[right_index] < array[right_index -1]:
            right_index += 1
        #compute the length of the peak
        current_length = right_index - left_index -1
        longest_length = max(longest_length, current_length)
        curr = right_index
    return longest_length

#test
array = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]
print(longestPeak(array))