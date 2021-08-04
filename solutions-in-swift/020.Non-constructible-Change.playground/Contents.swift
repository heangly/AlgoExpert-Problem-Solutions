import Foundation

//Time: O(nlog(n)) | Space: O(1)
func nonContructibleChange(_ coins: inout [Int]) -> Int {
    if coins.count < 1 { return 1 }

    coins.sort()
    var ans: Int = 0

    for coin in coins {
        if coin > ans + 1 {
            return ans + 1
        }
        ans += coin
    }
    
    return ans + 1
}

var coins = [5, 7, 1, 1, 2, 3, 22]
print(nonContructibleChange(&coins))
