import UIKit

// Time: O(n) | Space: O(1)
func nonConstructibleChange(_ coins: inout [Int]) -> Int {
    coins.sort()
    var change = 1
    
    for coin in coins {
        if change >= coin {
            change += coin
        }else{
            return change
        }
    }
    
    return change
}

var coins = [5, 7, 1, 1, 2, 3, 22]
print(nonConstructibleChange(&coins))
