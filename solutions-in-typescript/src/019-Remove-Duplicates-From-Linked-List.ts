class LinkedList {
  value: number
  next: LinkedList | null

  constructor(value: number) {
    this.value = value
    this.next = null
  }
}

// Time: O(n) | Space: O(1)
const removeDuplicateFromLinkedList = (linkedList: LinkedList): LinkedList => {
  let head = linkedList
  let currNode: LinkedList | null = head
  let nextNode = currNode.next

  while (currNode) {
    while (nextNode?.value === currNode.value) {
      nextNode = nextNode.next
    }
    currNode.next = nextNode
    currNode = currNode.next
  }

  return head
}

export {}
