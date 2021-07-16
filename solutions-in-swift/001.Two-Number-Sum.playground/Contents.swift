import Foundation

// Time: O(n) | space: O(n)
func twoNumSum(_ array: inout[Int], _ targetSum: Int) -> [Int] {
    var dict = [Int: Bool]()

    for num in array {
        let candidate = targetSum - num

        if let _ = dict[candidate] {
            return [candidate, num]
        } else {
            dict[num] = true
        }
    }
 
    return []
}


var arr = [3, 5, -4, 8, 11, 1, -1, 6]
print(twoNumSum(&arr, 10))
