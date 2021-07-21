import Foundation

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

//   Time: O(V + E) | Space: O(V)
    func depthFirstSearch(array: inout [String]) -> [String] {
        array.append(self.name)
        self.children.forEach { $0.depthFirstSearch(array: &array) }
        return array
    }
}

let graph = Node(name: "A")
graph.addChild(name: "B").addChild(name: "C").addChild(name: "D")
graph.children[0].addChild(name: "E").addChild(name: "F")
graph.children[2].addChild(name: "G").addChild(name: "H")
graph.children[0].children[1].addChild(name: "I").addChild(name: "J")
graph.children[2].children[0].addChild(name: "K")

var arr = [String]()
print(graph.depthFirstSearch(array: &arr))

