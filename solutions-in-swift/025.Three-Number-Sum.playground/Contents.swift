import Foundation

// Time: O(n) | Space O(n)
func threeNumberSum(array: inout [Int], targetSum: Int) -> [[Int]] {
    array.sort()
    var ans = [[Int]]()
    
    for (idx, num) in array.enumerated() {
        var start = idx + 1
        var end = array.count - 1
        
        while start < end {
            let potentialSum = num + array[start] + array[end]
            if potentialSum < targetSum {
                start += 1
            }else if potentialSum > targetSum {
                end -= 1
            }else{
                ans.append([num, array[start], array[end]])
                start += 1
                end -= 1
            }
        }
    }
    return ans
}

var arr = [1, 2, 3]
print(threeNumberSum(array: &arr, targetSum: 6))
