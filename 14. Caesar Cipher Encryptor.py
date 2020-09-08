"""
Casesar Cipher Encryptor

Given a non-empty of lowercase letters and a non-negative integer representing a key, write a function that return a new
string obtained by shifting every letter in the input string by k position in the alphabet, where k is the key.

Note that letters should "wrap" around the alphabet; in other word, the letter z shifted by one returns the letter a.

Sample Input:
string = 'xyz'
key = 2

Sample output:
'zab'
"""
# ASCII of a-z is 97->122, A->Z is 65->90
#ord(char)-> ASCII num
#chr(ascii num) -> alphabet letter

## first approach
# O(n^2) time | O(n) space
def caesarCipherEncryptor(string, key):
    encrypted = ''
    for char in string:
        ascii_num = ord(char)
        ascii_num += key
        # handle case when you reach the end of the alphabet. Ex: wrap 'y'-> 'a', 'z'->'b'
        while ascii_num > 122:
            ascii_num -= 26
        encrypted += chr(ascii_num)
    return encrypted

## second approach
# # O(n) time | O(n) space
# def caesarCipherEncryptor(string, key):
#     new_letter = []
#     new_key = key % 26
#     for letter in string:
#         new_letter.append(helper(letter, new_key))
#     return ''.join(new_letter)
#
# def helper(letter, key):
#     new_letter_code = ord(letter) + key
#     return chr(new_letter_code) if new_letter_code <= 122 else chr(96 + new_letter_code % 122)


# test
print(caesarCipherEncryptor('abc', 57))



