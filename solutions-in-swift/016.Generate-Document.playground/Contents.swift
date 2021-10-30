import UIKit


// Time: O(n + m) where n is number of character, m is the number of document
// Space: O(c) c is the number of unique characterr in character
func generateDocument(_ character: String, _ document: String) -> Bool {
    var charDict = [Character: Int]()
    
    for char in character {
        if let value = charDict[char] {
            charDict[char] = value + 1
        }else{
            charDict[char] = 1
        }
    }
    
    for char in document {
        if let value = charDict[char], value > 0 {
            charDict[char] = value - 1
        }else{
            return false
        }
    }
    
    return true
}


print(generateDocument("Bste!hetsi ogEAxpelrt x ", "AlgoExpert is the Best!"))
