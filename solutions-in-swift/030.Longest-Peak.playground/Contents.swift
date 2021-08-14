import Foundation

// Time: O(n) | Space: O(1)
func longestPeak(array: [Int]) -> Int {
    var answer = 0
    
    for i in 0..<array.count {
        var isPeak = false
        if i > 0, i < array.count - 1, array[i] > array[i - 1], array[i] > array[i + 1]{
            isPeak = true
        }
        
        if isPeak {
            let newPeakLength = getPeakLength(fromIndex: i, in: array)
            if newPeakLength > answer {
                answer = newPeakLength
            }
        }
       
    }
    
    return answer
}

func getPeakLength(fromIndex index: Int, in array: [Int]) -> Int {
    var length = 1
    var left = index
    var right = index
    
    while left > 0, array[left] > array[left - 1] {
        length += 1
        left -= 1
    }
    
    while right < array.count - 1 ,array[right] > array[right + 1]{
        length += 1
        right += 1
    }
        
    return length
}


let arr = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]
print(longestPeak(array: arr))
