import UIKit

class Node {
    let name: String
    var children: [Node]

    init(name: String) {
        self.name = name
        children = []
    }

    func addChild(name: String) -> Node {
        let childNode = Node(name: name)
        children.append(childNode)

        return self
    }

    // O(v + e) time | O(v) space
    func depthFirstSearch(array: inout [String]) -> [String] {
        array.append(self.name)
        children.forEach { $0.depthFirstSearch(array: &array) }
        return array
    }
}
