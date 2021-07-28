import Foundation


// Time: O(n) | Space: O(1)
func isPalindrome(string: String) -> Bool {
    var startIdx = 0
    var endIdx = string.count - 1
    
    while startIdx <= endIdx {
        let leftChar = string[string.index(string.startIndex, offsetBy: startIdx)]
        let rightChar = string[string.index(string.startIndex, offsetBy: endIdx)]
        if leftChar != rightChar { return false }
        startIdx += 1
        endIdx -= 1
    }
    
    return true
}

print(isPalindrome(string: "abcdcba"))
