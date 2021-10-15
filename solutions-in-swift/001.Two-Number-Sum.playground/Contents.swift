import UIKit

// Time: O(n), Space: O(n)
func twoNumberSum(_ array: inout[Int], _ targetSum: Int) -> [Int] {
    var dict = [Int: Bool]()
    
    for num in array {
        let candidate = targetSum - num
        if let _  = dict[candidate] {
            return [candidate, num]
        }
        dict[num] = true
    }
    return []
}

// Time: O(nlog(n)), Space: O(1)
//func twoNumberSum(_ array: inout[Int], _ targetSum: Int) -> [Int] {
//    array.sort()
//    var leftIdx = 0
//    var rightIdx = array.count - 1
//
//    while leftIdx < rightIdx {
//        let tempSum = array[leftIdx] + array[rightIdx]
//        if tempSum == targetSum {
//            return [array[leftIdx], array[rightIdx]]
//        } else if tempSum < targetSum {
//            leftIdx += 1
//        } else {
//            rightIdx -= 1
//        }
//    }
//    return []
//}


var arr = [3, 5, -4, 8, 11, 1, -1, 6]
let targetSum = 10

print(twoNumberSum(&arr, targetSum))
