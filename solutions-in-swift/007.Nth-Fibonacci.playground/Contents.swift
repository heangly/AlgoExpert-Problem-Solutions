import UIKit


// Time: O(n) | Space: O(1)
func getNthFib(n: Int) -> Int {
    var lastTwo = [0, 1]

    if n == 1 { return lastTwo[0] }
    if n == 2 { return lastTwo[1] }

    var counter = 3
    while counter <= n {
        let nextFib = lastTwo[0] + lastTwo[1]
        lastTwo[0] = lastTwo[1]
        lastTwo[1] = nextFib
        counter += 1
    }
    return lastTwo[1]
}


// Time: O(2^n) | Space: O(n)
//func getNthFib(n: Int) -> Int {
//    // Base Case
//    if n <= 0 { return -1 }
//    if n == 1 { return 0 }
//    if n == 2 { return 1 }
//    // recursion
//    return getNthFib(n: n - 1) + getNthFib(n: n - 2)
//}


print(getNthFib(n: 4))
