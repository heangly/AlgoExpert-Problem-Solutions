import UIKit

// Time: O(n) | Space: O(n)
func caesarCipherEncryptor(string: String, key: UInt32) -> String {
    let alphabets = Array("abcdefghijklmnopqrstuvwxyz")
    var answers = [Character]()

    for str in string {
        if let idx = alphabets.firstIndex(of: str) {
            let newIdx = (idx + Int(key)) % 26
            answers.append(alphabets[newIdx])
        }
    }

    return String(answers)
}

print(caesarCipherEncryptor(string: "xyz", key: 2))


