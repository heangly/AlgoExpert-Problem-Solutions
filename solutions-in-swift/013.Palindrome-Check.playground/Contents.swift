import UIKit

//Time: O(n) | Space: O(n)
func isPalindrome(string: String) -> Bool {
    let array = Array(string)
    var leftIdx = 0
    var rightIdx = array.count - 1

    while leftIdx <= rightIdx {
        if array[leftIdx] != array[rightIdx] { return false }
        leftIdx += 1
        rightIdx -= 1
    }
    return true
}

print(isPalindrome(string: "abcdcba"))
