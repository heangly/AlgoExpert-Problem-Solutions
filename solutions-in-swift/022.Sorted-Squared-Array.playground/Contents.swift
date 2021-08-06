import Foundation

//Time: O(nlog(n)) | Space: O(n), where n is the length of newly created array
class Program {
    func sortedSquaredArray(_ array: [Int]) -> [Int] {
        return array.map { $0 * $0 }.sorted()
    }
}

let program = Program()
print(program.sortedSquaredArray([1, 2, 3, 5, 6, 8, 9]))
