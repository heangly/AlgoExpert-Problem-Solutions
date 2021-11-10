class LinkedList {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

function removeDuplicatesFromLinkedList(linkedList) {
  let prevNode = linkedList
  let currNode = prevNode.next

  while (currNode) {
    if (currNode.value === prevNode.value) {
      prevNode.next = currNode.next
      currNode = prevNode.next
    } else {
      prevNode = prevNode.next
      currNode = currNode.next
    }
  }

  return linkedList
}
