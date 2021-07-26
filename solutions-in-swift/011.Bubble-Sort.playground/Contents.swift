import Foundation

//Time: O(n^2)  |  Space: O(1)
func bubbleSort(array: inout [Int]) -> [Int] {
    if array.count == 1 { return array }
    var swapHappen = true
    while swapHappen {
        swapHappen = false
        for i in 0...array.count - 2 {
            if array[i] > array[i + 1] {
                array.swapAt(i, i + 1)
                swapHappen = true
            }
        }
    }
    return array
}

var arr = [1]
print(bubbleSort(array: &arr))
