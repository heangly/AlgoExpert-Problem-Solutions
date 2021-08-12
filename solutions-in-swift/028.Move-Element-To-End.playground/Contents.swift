import Foundation

// Time: O(n) | Space: O(1)
func moveElementToEnd(_ array: inout [Int], _ toMove: Int) -> [Int] {
    var startIdx = 0
    var endIdx = array.count - 1

    while startIdx < endIdx {
        while array[endIdx] == toMove, endIdx > startIdx {
            endIdx -= 1
        }

        if array[startIdx] == toMove {
            array.swapAt(startIdx, endIdx)
        }

        startIdx += 1
    }
    return array
}


var array = [2, 1, 2, 2, 2, 3, 4, 2]
let toMove = 2
print(moveElementToEnd(&array, toMove))
