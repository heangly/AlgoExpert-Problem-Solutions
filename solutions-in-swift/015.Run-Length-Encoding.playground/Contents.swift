import Foundation


// Time: O(n) | Space: O(n) where n is the length of input string
func runLengthEncoding(_ string: String) -> String {
    if string.count < 2 { return "1\(string)"}
    
    var ans = [String]()
    var counter = 1

    for i in 1...string.count - 1 {
        let previousString = string[string.index(string.startIndex, offsetBy: i - 1)]
        let currentString = string[string.index(string.startIndex, offsetBy: i)]

        if currentString == previousString, counter < 9 {
            counter += 1
        }else{
            ans.append("\(counter)\(previousString)")
            counter = 1
        }
    }
    
    ans.append("\(counter)\(string.last!)")
    return ans.joined()
}


print(runLengthEncoding("AAAAAAAAAAAAABBCCCCDD"))
