import UIKit

// Time: O(nlog(n)) | Space: O(n)
func sortedSquareArray(_ array: [Int]) -> [Int] {
    return array.map { $0 * $0 }.sorted()
}
