"""
*** Levenshtein Distance ***
Write a function that takes in two strings and returns the minimum number of edit operations that need to be performed on the first string
to otain the second string.

There are three edit operations: insertion of a character, deletion of a character, and substitution of a character for another.

Sample Input:
str1 = "abc"
str2 = "yabd"

Sample Output:
2 //insert "y"; substitute "c" for "d"

"""

#O(nm) time | O(nm) space
def levelshteinDistance(str1, str2):
    edits = [[x for x in range(len(str1) + 1)] for y in range(len(str2) + 1)]
    for i in range(1, len(str2) + 1):
        edits[i][0] = edits[i-1][0] + 1

    for i in range(1, len(str2) + 1):
        for j in range(1, len(str1) + 1):
            if str2[i-1] == str1[j - 1]:
                edits[i][j] = edits[i - 1][j - 1]
            else:
                edits[i][j] = 1 + min(edits[i-1][j-1], edits[i][j-1], edits[i-1][j])

    return edits[-1][-1]




# testing
str1 = "abc"
str2 = "yabd"
print(levelshteinDistance(str1, str2))