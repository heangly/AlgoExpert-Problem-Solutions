import Foundation

// Time: O(n) n | Space: O(n)
func firstNonRepeatingCharacter(_ string: String) -> Int {
    var occurenceTracker = [Character: Int]()

    for char in string {
        occurenceTracker[char] = (occurenceTracker[char] ?? 0) + 1
    }

    for (index, char) in string.enumerated() {
        if occurenceTracker[char] == 1 { return index }
    }

    return -1
}

print(firstNonRepeatingCharacter("abcdcaf"))
