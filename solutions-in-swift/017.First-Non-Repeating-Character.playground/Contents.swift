import UIKit

// Time: O(n) | Space: O(u) where u is the number of unique character
func firstNonRepeatingCharacter(_ string: String) -> Int {
    var dict = [Character: Int]()
    for char in string {
        dict[char] = (dict[char] ?? 0) + 1
    }


    for (idx, char) in string.enumerated() {
        if dict[char] == 1 { return idx }
    }

    return -1
}


print(firstNonRepeatingCharacter("abcdcaf"))

