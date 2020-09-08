"""
*** Palindrome Check ***

Write a function that take in a non-empty string and that returns a boolean representing whether the string is a palindrome.
A palindrome is defined as a string that's written the same forward and backward. Note that single chracter strings are palindromes.

Sample Input:
String = 'abcdcba'

Sample Output:
true //it's written the same forward and backward
"""

#O(n) time | O(1) space
# #    |-> approach <-|
def isPalindrome(string):
    first = 0
    last = len(string) - 1

    if not string:
        return False
    elif len(string) is 1:
        return True
    else:
        while first < last:
            if string[first] != string[last]:
                return False
            first += 1
            last -= 1
        return True

#O(n) time | O(n) sapce
## recursive approach
# def isPalindrome(string, i=0):
#     j = len(string) - 1 - i
#     return True if i >= j else string[i] == string[j] and isPalindrome(string, i+1)

# sort the string backward approach
# def isPalindrome(string):
#     backward_string = string[::-1]
#     return string[::-1] == string

#O(n^2) time | O(n) space
# def isPalindrome(string):
#     new_string = ''
#     for i in range(len(string)-1, -1, -1):
#         new_string += string[i]
#     return new_string == string

# test
string = 'racecar'
print(isPalindrome(string))