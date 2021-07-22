import Foundation

// O(2^n) time | O(n) space
func getNthFib(n: Int) -> Int {
    return n == 1 ? 0
    : n == 2 ? 1
    : getNthFib(n: n - 1) + getNthFib(n: n - 2)
}



print(getNthFib(n: 6))
