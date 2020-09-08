"""
*** Nth Fibonacci ***

The Fibonacci sequence is defined as follows: the first number of the sequence is 0, the second number is 1, and the nth
number is the sum of the (n-1)th and (n-2)th number. Write a function that takes in an integer n and returns the nth Fibonacci
number.
Important note: the Fibonacci sequence is often defined with its first two numbers as F0 = 0 and F1 = 1. For the purpose of
this question, the first Fibonacci number is F0; therefore, getNthFib(1) is equal to F0, getNthFib(2) is equal to F1, etc..

Sample Input#1:
n=2
Sample Output#1:
1 //0,1

Sample Input#2:
n=6
Sample Output #2
5 //0,1,1,2,3,5
"""

#first recursive solution
# O(2^n) time | O(n) space
def getNthFib(n):
    if n == 2:
        return 1
    elif n == 1:
        return 0
    else:
        return getNthFib(n-1) + getNthFib(n-2)

#second recursive solution
# O(n) time | O(n) space
def getNthFib(n, memoize={1: 0, 2: 1}):
    if n in memoize:
        return memoize[n]
    else:
        memoize[n] = getNthFib(n-1, memoize) + getNthFib(n-2, memoize)
        return memoize[n]

#iterative solution
# O(n) time | O(1) space
def getNthFib(n):
    lastTwo = [0, 1]
    counter = 3
    while counter <= n:
        nextFib = lastTwo[0] + lastTwo[1]
        lastTwo[0] = lastTwo[1]
        lastTwo[1] = nextFib
        counter += 1
    return lastTwo[1] if n > 1 else lastTwo[0]