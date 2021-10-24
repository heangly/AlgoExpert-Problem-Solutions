import UIKit

// Time: O(n), Space: O(1)
func findThreeLargestNumbers(array: [Int]) -> [Int] {
    var ans = [Int.min, Int.min, Int.min]
    for num in array {
        if num > ans[2]{
            ans.swapAt(0, 1)
            ans.swapAt(1, 2)
            ans[2] = num
        }else if num > ans[1]{
            ans.swapAt(0 , 1)
            ans[1] = num
        }else if num > ans[0]{
            ans[0] = num
        }
    }
    return ans
}

let array = [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]
print(findThreeLargestNumbers(array: array))
