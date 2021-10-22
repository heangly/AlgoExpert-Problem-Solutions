import UIKit


// Time: O(n) | Space: O(d)
func productSum(_ array: [Any]) -> Int {
    return helper(depth: 1, array: array)
}

func helper(depth: Int, array: [Any]) -> Int{
    var sum = 0
    for element in array {
        if let num = element as? Int {
            sum += num
        }else{
            sum += helper(depth: depth + 1, array: element as! [Any])
        }
    }
    return depth * sum
}

let array: [Any] = [5, 2, [7, -1], 3, [6, [-13, 8], 4]]
print(productSum(array))
