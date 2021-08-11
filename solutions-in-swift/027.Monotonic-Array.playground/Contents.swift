import Foundation

// Better solution
// Time: O(n) | Space: O(10
func isMonotonic(array: [Int]) -> Bool {
    if array.count <= 2 { return true }

    var direction = array[1] - array[0]

    for i in 2..<array.count {
        if direction == 0 {
            direction = array[i] - array[i - 1]
            continue
        }

        let diff = array[i] - array[i - 1]
        // case increasing
        print(direction)
        print(diff)
        if direction > 0 {
            if diff < 0 { return false }
        } else {
            if diff > 0 { return false }
        }
    }
    return true
}




//  // First Solution
//enum Direction {
//    case increase, decrease
//}
//
//func isMonotonic(array: [Int]) -> Bool {
//    if array.count < 2 { return true }
//    var firstIdx = 0
//    var secondIdx = 1
//
//    while secondIdx < array.count, array[firstIdx] == array[secondIdx] {
//        secondIdx += 1
//    }
//
//    if secondIdx == array.count { return true }
//
//    let direction = array[secondIdx] > array[firstIdx] ? Direction.increase : Direction.decrease
//
//    switch direction {
//    case .increase:
//        while secondIdx < array.count {
//            if array[secondIdx] < array[secondIdx - 1] { return false }
//            secondIdx += 1
//        }
//
//    case .decrease:
//        while secondIdx < array.count {
//            if array[secondIdx] > array[secondIdx - 1] { return false }
//            secondIdx += 1
//        }
//
//    }
//
//    return true
//}




print(isMonotonic(array: [1, 2, 0]))
