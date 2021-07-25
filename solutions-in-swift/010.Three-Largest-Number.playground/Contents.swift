import Foundation

// Time: O(n) | Space O(1)
func findThreeLargestNumbers(array: [Int]) -> [Int] {
    var ans = [Int.min, Int.min, Int.min]

    for element in array {
        if element > ans[2] {
            ans.swapAt(1, 0)
            ans.swapAt(2, 1)
            ans[2] = element
        }else if element > ans[1] {
            ans.swapAt(1, 0)
            ans[1] = element
        }else if element > ans[0]{
            ans[0] = element
        }
    }
    return ans
}


let arr = [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]
print(findThreeLargestNumbers(array: arr))
