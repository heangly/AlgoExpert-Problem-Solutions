import UIKit

func removeDuplicateLetteres(_ s: String) -> String {
    var answers = [String]()
    for string in s {
        let candidate = String(string)
        if !answers.contains(candidate){
            answers.append(candidate)
        }
    }
    answers.sort()
    return answers.joined(separator: "")
}

print(removeDuplicateLetteres("cbacdcbc"))
