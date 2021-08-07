import Foundation

// Time: O(nlog(n)) | Space: O(1)
func tademBicycle(_ redShirtSpeeds: inout [Int], _ blueShirtSpeeds: inout [Int], _ fastest: Bool) -> Int {
    var ans = 0
    redShirtSpeeds.sort()
    fastest ? blueShirtSpeeds.sort { $0 > $1 } : blueShirtSpeeds.sort()

    for i in 0..<redShirtSpeeds.count {
        ans += max(redShirtSpeeds[i], blueShirtSpeeds[i])
    }

    return ans
}


var redShirtSpeeds = [5, 5, 3, 9, 2]
var blueShirtSpeeds = [3, 6, 7, 2, 1]
let fastest = true
print(tademBicycle(&redShirtSpeeds, &blueShirtSpeeds, fastest))
