import UIKit

// Time: O(log(n)) | Space: O(1)
func binarySearch(array: [Int], target: Int) -> Int {
    var leftIdx = 0
    var rightIdx = array.count - 1
    
    while leftIdx <= rightIdx {
        let midIdx = (leftIdx + rightIdx) / 2
        if array[midIdx] == target { return midIdx }
        if array[midIdx] < target {
            leftIdx = midIdx + 1
        } else {
            rightIdx = midIdx - 1
        }
    }
    return -1
}

//func binarySearch(array: [Int], target: Int) -> Int {
//    return helper(leftIdx: 0, rightIdx: array.count - 1, array: array, target: target)
//}
//
//// Time: O(log(n)) | Space: O(log(n))
//func helper(leftIdx: Int, rightIdx: Int, array: [Int], target: Int) -> Int {
//    if leftIdx > rightIdx { return -1 }
//    let midIdx = (leftIdx + rightIdx) / 2
//    if array[midIdx] == target { return midIdx }
//
//    let increaseLeftIdx: Bool = array[midIdx] < target
//
//    return helper(
//        leftIdx: increaseLeftIdx ? midIdx + 1 : leftIdx,
//        rightIdx: !increaseLeftIdx ? midIdx - 1 : rightIdx,
//        array: array,
//        target: target
//    )
//}

let array = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73]
let target = 33
print(binarySearch(array: array, target: target))
