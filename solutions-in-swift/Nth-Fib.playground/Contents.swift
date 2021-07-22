import Foundation

// O(2^n) time | O(n) space
func getNthFib(n: Int) -> Int {
    return n == 1 ? 0
    : n == 2 ? 1
    : getNthFib(n: n - 1) + getNthFib(n: n - 2)
}

// O(n) time | O(1) space
func getNthFib2(n: Int) -> Int {
    if n == 1 {
        return 0
    }

    if n == 2 {
        return 1
    }

    var arr = [0, 1]
    var counter = 2

    while counter < n {
        let newElement = arr[counter - 1] + arr[counter - 2]
        arr[0] = arr[1]
        arr[1] = newElement
        counter += 1
    }
    return arr[1]
}

print(getNthFib(n: 6))
