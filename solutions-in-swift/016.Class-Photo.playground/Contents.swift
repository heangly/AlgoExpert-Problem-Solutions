import Foundation

// Time: O(nlogn) || Space: O(1)
func classPhoto(_ redShirtHeights: inout [Int], _ blueShirtHeights: inout [Int]) -> Bool {
    redShirtHeights.sort { $0 > $1 }
    blueShirtHeights.sort { $0 > $1 }

    if redShirtHeights[0] > blueShirtHeights[0] {
        return helper(backRow: redShirtHeights, frontRow: blueShirtHeights)
    } else {
        return helper(backRow: blueShirtHeights, frontRow: redShirtHeights)
    }
}

func helper(backRow: [Int], frontRow: [Int]) -> Bool {
    for i in 0..<backRow.count {
        if frontRow[i] >= backRow[i] { return false }
    }
    return true
}



var red = [2, 4, 7, 5, 1]
var blue = [3, 5, 6, 8, 2]

print(classPhoto(&red, &blue))
