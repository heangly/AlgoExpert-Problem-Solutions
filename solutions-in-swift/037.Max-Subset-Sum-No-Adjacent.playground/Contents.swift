import Foundation

// Time: O(n) | Space: O(1)
func maximumSubsetSum(array: [Int]) -> Int {
    if array.count == 0 { return 0 }
    if array.count == 1 { return array[0] }
    
    var second = array[0]
    var first = max(array[0], array[1])
    
    for i in 2..<array.count {
        let current = max(first, second + array[i])
        second = first
        first = current
    }
    return first
}


print(maximumSubsetSum(array: [75, 105, 120, 75, 90, 135]))
