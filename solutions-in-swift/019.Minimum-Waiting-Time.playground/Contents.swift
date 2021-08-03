import Foundation

//Time: O(nlogn) | Space: O(n)
func minimumWaitingTime(_ queries: inout [Int]) -> Int {
    if queries.count < 2 { return 0 }

    queries.sort()
    var waitingTime = [queries[0]]

    for i in 1..<queries.count - 1 {
        waitingTime.append(queries[i] + waitingTime[i - 1])
    }

    return waitingTime.reduce(0) { $0 + $1 }
}

var q = [3, 2, 1, 2, 6]
print(minimumWaitingTime(&q))
