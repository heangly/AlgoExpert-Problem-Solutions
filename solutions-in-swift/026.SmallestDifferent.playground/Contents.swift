import Foundation

// Time: O(nlog(n) | Space: O(n)
func smallestDifference(arrayOne: inout [Int], arrayTwo: inout [Int]) -> [Int] {
    var ans = [Int]()
    arrayOne.sort()
    arrayTwo.sort()

    var arrayOneIdx = 0
    var arrayTwoIdx = 0
    var smallestValue = Int.max

    while arrayOneIdx < arrayOne.count, arrayTwoIdx < arrayTwo.count {
        let firstNum = arrayOne[arrayOneIdx]
        let secondNum = arrayTwo[arrayTwoIdx]

        if firstNum < secondNum {
            arrayOneIdx += 1
        } else if firstNum > secondNum {
            arrayTwoIdx += 1
        } else {
            return [firstNum, secondNum]
        }

        let currentDiff = abs(firstNum - secondNum)
        if currentDiff < smallestValue {
            ans = [firstNum, secondNum]
            smallestValue = currentDiff
        }
    }

    return ans
}


var firstArray = [-1, 5, 10, 20, 28, 3]
var secondArray = [26, 134, 135, 15, 17]
print(smallestDifference(arrayOne: &firstArray, arrayTwo: &secondArray))
