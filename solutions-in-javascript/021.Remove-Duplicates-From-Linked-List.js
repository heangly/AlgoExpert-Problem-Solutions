// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

function removeDuplicatesFromLinkedList(linkedList) {
  // Write your code here.
  let curr = linkedList
  while (curr) {
    let nextNode = curr.next
    while (nextNode && nextNode.value === curr.value) {
      nextNode = nextNode.next
    }

    curr.next = nextNode
    curr = nextNode
  }
  return linkedList
}

let ll = new LinkedList(1)
ll.next = new LinkedList(1)
ll.next.next = new LinkedList(3)
ll.next.next.next = new LinkedList(4)
ll.next.next.next.next = new LinkedList(4)
ll.next.next.next.next.next = new LinkedList(4)
ll.next.next.next.next.next.next = new LinkedList(5)
ll.next.next.next.next.next.next.next = new LinkedList(6)
ll.next.next.next.next.next.next.next.next = new LinkedList(6)

console.log(removeDuplicatesFromLinkedList(ll))
