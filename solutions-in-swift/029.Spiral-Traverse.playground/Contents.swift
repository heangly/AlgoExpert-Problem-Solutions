import Foundation

// Time: O(n^2) | Space: O(n)
func spiralTraverse(array: [[Int]]) -> [Int] {
    var myArray = array
    var ans = [Int]()

    while myArray.count > 0 {
        myArray.removeFirst().forEach { ans.append($0) }

        for i in 0..<myArray.count{
            if let lastElement = myArray[i].popLast() {
                ans.append(lastElement)
                myArray[i].reverse()
            }
        }

        myArray.reverse()
    }
    return ans
}

let array = [
    [1, 2, 3, 4],
    [12, 13, 14, 5],
    [11, 16, 15, 6],
    [10, 9, 8, 7]
]

print(spiralTraverse(array: array))
