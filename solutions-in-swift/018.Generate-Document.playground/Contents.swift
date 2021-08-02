import Foundation


// Time: O(n + m) where n is length of characters, m is length of document | Space: O(n) where n is length of characters
class Program {
    func generateDocument(_ characters: String, _ document: String) -> Bool {
        if characters.count < document.count { return false }
        
        var frequencies = [Character: Int]()
        
        for char in characters {
            frequencies[char] = (frequencies[char] ?? 0) + 1
        }
        
        for char in document {
            if let value = frequencies[char], value >= 1 {
                frequencies[char] = frequencies[char]! - 1
            }else {
                return false
            }
        }
        
        return true
    }
}

// Time: O(n^2) | Space: O(n)
//class Program {
//    func generateDocument(_ characters: String, _ document: String) -> Bool {
//        if characters.count < document.count { return false }
//
//        var charArray = Array(characters)
//
//        for char in document {
//            if let idx = charArray.firstIndex(of: char) {
//                charArray.remove(at: idx)
//            } else {
//                return false
//            }
//        }
//        return true
//    }
//}

let characters = "Bste!hetsi ogEAxpelrt x "
let document = "AlgoExpert is the Best!"

// frequency of char in characers must be >= document
print(Program().generateDocument(characters, document))
