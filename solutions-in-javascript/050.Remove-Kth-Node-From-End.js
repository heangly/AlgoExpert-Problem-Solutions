// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

function removeKthNodeFromEnd(head, k) {
  let counter = 1
  let first = head
  let second = head

  while (counter <= k) {
    second = second.next
    counter++
  }

  if (!second) {
    head.value = head.next.value
    head.next = head.next.next
    return
  }

  while (second.next) {
    second = second.next
    first = first.next
  }
  first.next = first.next.next
}
