import Foundation

func numberOfWaysToMakeChange(target: Int, denominations: [Int]) -> Int {
   var ways = Array(repeating: 0, count: target + 1)
    ways[0] = 1
    
    for deno in denominations {
        for amount in 1..<target + 1 {
            if deno <= amount {
                ways[amount] = ways[amount] + ways[amount - deno]
            }
        }
    }
    return ways[target]
}

print(numberOfWaysToMakeChange(target: 6, denominations: [1, 5]))
