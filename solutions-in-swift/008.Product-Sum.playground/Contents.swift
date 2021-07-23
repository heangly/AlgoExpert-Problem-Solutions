import Foundation

//Time O(n) time | O(d) space
func productSum(_ array: [Any]) -> Int {
    return helper(array, 1)
}

func helper(_ array: [Any], _ multiplier: Int) -> Int {
    var sum = 0
    
    for element in array {
        if let element = element as? Int {
            sum += element
        } else {
            sum += helper(element as! [Any], multiplier + 1)
        }
    }
    return sum * multiplier
}


let arr: [Any] = [5, 2, [7, -1], 3, [6, [-13, 8], 4]]
print(productSum(arr))
