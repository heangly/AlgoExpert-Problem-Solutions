import Foundation

// O(n) time | O(n) space
func caesarCipherEncryptor(string: String, key: UInt32) -> String {
    let alphabets = Array("abcdefghijklmnopqrstuvwxyz")
    var ans = ""
    let maxIndexChar = 26
    let intKey = Int(key)

    for char in string {
        var charIndex = alphabets.firstIndex(of: char)!
        charIndex = (charIndex + intKey) % maxIndexChar
        ans = "\(ans)\(alphabets[charIndex])"
    }

    return ans
}


print(caesarCipherEncryptor(string: "abc", key: 2))
