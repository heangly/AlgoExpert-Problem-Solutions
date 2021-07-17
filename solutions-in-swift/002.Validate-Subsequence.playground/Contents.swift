import Foundation

// O(n)time | O(1)space
func isValidSubsequence(_ array: [Int], _ sequence: [Int]) -> Bool {
    var idx = 0
    for element in array {
        if idx < sequence.count && element == sequence[idx] {
            idx += 1
        }
    }
    return idx == sequence.count
}



let array = [5, 1, 22, 25, 6, -1, 8, 10]
let sequence = [1, 6, -1, 10]

print(isValidSubsequence(array, sequence))
