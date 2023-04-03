class LinkedList {
  value: number
  next: LinkedList | null

  constructor(value: number) {
    this.value = value
    this.next = null
  }
}

// Time: O(n) | Space: O(1)
const removeKthNodeFromEnd = (head: LinkedList, k: number) => {
  let curr: LinkedList | null = head
  const len = getLength(head)
  const idxToRemove = len - k

  if (idxToRemove === 0) {
    head.value = head.next!.value
    head.next = head.next!.next
  }

  let i = 0
  let prev = curr
  while (curr) {
    if (i === idxToRemove) {
      prev.next = curr.next
      return
    }
    prev = curr
    curr = curr.next
    i++
  }
}

const getLength = (head: LinkedList): number => {
  let curr: LinkedList | null = head
  let len = 0
  while (curr) {
    len++
    curr = curr.next
  }

  return len
}

export {}
