import UIKit

// Time: O(n^2) | Space: O(1)
func bubbleSort(array: inout [Int]) -> [Int] {
    var isSorted = false

    while !isSorted {
        isSorted = true
        for i in 0..<array.count - 1 {
            if array[i] > array[i + 1] {
                array.swapAt(i, i + 1)
                isSorted = false
            }
        }
    }
    return array
}

var array = [8, 5, 2, 9, 5, 6, 3]
print(bubbleSort(array: &array))
