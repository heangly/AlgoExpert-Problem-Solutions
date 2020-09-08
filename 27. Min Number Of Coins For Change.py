"""
Min Number Of Coins For Change

Given an array of positive integers representing coin denominations and a single non-negative integer n representing a target
amount of money, write a function that returns the smallest number of couns needed to make change for that target amount using the given coin
denominations.
If it is impossible to make change for the target amount, return -1.
Note that an unlimited amount of coins is at your disposal.

Sample Input
n = 7
denoms = [1, 5, 10]

Sample Output
3// 2x1 + 1x5
"""

#O(nd) time | O(n) space
def minNUmberofCoinsForChange(n, denoms):
    numOfCoins = [float("inf") for amount in range(n+1)]
    numOfCoins[0] = 0

    for denom in denoms:
        for amount in range(len(numOfCoins)):
            if denom <= amount:
                numOfCoins[amount] = min(numOfCoins[amount], 1 + numOfCoins[amount - denom])
    return numOfCoins[n] if numOfCoins[n] != float("inf") else -1


#testing
n = 7
denoms = [1, 5, 10]
print(minNUmberofCoinsForChange(n, denoms))



















