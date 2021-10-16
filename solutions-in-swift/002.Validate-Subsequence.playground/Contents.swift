import UIKit

// Time: O(n), Space: O(1)
func isValidSubsequence(_ array: [Int], _ sequence: [Int]) -> Bool {
    var sequenceIdx = 0
    for num in array {
        if sequenceIdx < sequence.count, num == sequence[sequenceIdx]{
            sequenceIdx += 1
        }
    }
    return sequenceIdx == sequence.count
}

let array = [5, 1, 22, 25, 6, -1, 8, 10]
let sequence = [1, 6, -1, 10]
print(isValidSubsequence(array, sequence))
