import UIKit

// Time: O(n) | Space O(n) where n is the length of the input string
func runLengthEncoding(_ string: String) -> String {
    var answer = ""
    var count = 1
    
    for i in 1..<string.count {
        let currIdx = string.index(string.startIndex, offsetBy: i)
        let prevIdx = string.index(string.startIndex, offsetBy: i - 1)
        
        if string[currIdx] == string[prevIdx], count < 9 {
            count += 1
        }else{
            answer += "\(count)\(string[prevIdx])"
            count = 1
        }
    }
    
    answer += "\(count)\(string.last!)"
    
    return answer
}

print(runLengthEncoding("AAAAAAAAAAAAABBCCCCDD"))
