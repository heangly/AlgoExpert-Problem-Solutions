class Node {
  value: number
  prev: Node | null
  next: Node | null

  constructor(value: number) {
    this.value = value
    this.prev = null
    this.next = null
  }
}

class DoublyLinkedList {
  head: Node | null
  tail: Node | null

  constructor() {
    this.head = null
    this.tail = null
  }

  setHead(node: Node) {}

  setTail(node: Node) {}

  insertBefore(node: Node, nodeToInsert: Node) {}

  insertAfter(node: Node, nodeToInsert: Node) {}

  insertAtPostiton(position: number, nodeToInsert: Node) {}

  removeNodesWithValue(value: number) {}

  remove(node: Node) {}

  containNodeWithValue(value: number) {}
}

const node1 = new Node(1)
const node2 = new Node(2)
const node3 = new Node(3)
const node4 = new Node(4)
const node5 = new Node(5)
node1.next = node2
node2.prev = node1
node2.next = node3
node3.prev = node2
node3.next = node4
node4.prev = node3
node4.next = node5
node5.prev = node4

const dl = new DoublyLinkedList()
dl.setHead(node4)

export {}
