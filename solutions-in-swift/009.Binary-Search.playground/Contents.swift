import Foundation

// Time: O(log(n)) | Space: O(1)
func binarysearch(array: [Int], target: Int) -> Int {
    var startIdx = 0
    var endIdx = array.count - 1

    while startIdx <= endIdx {
        let potentialIdx = (startIdx + endIdx) / 2

        if array[potentialIdx] < target {
            startIdx = potentialIdx + 1
        } else if array[potentialIdx] > target {
            endIdx = potentialIdx - 1
        } else {
            return potentialIdx
        }
    }

    return -1
}


let arr = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73]
let target = 33

print(binarysearch(array: arr, target: target))


