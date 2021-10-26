import UIKit

// Time: O(n^2) | Space: O(1)
func insertionSort(array: inout [Int]) -> [Int] {
    for i in 1..<array.count {
        var j = i
        while j > 0, array[j] < array[j - 1] {
            array.swapAt(j, j - 1)
            j -= 1
        }
    }

    return array
}

var arr = [8, 5, 2, 9, 5, 6, 3]
print(insertionSort(array: &arr))
