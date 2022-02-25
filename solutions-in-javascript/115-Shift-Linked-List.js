const generateLinkedList = (arr) => {
  let linkedList = new LinkedList(arr[0])
  const head = linkedList

  for (let i = 1; i < arr.length; i++) {
    linkedList.next = new LinkedList(arr[i])
    linkedList = linkedList.next
  }
  return head
}

const print = (head) => {
  const arr = []
  while (head) {
    arr.push(head.value)
    head = head.next
  }
  console.log(arr)
}

class LinkedList {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

const shiftLinkedList = (head, k) => {
  let listLength = 1
  let listTail = head
  while (listTail.next !== null) {
    listTail = listTail.next
    listLength++
  }

  const offSet = Math.abs(k) % listLength
  if (offSet === 0) return head

  const newTailPosition = k > 0 ? listLength - offSet : offSet
  let newTail = head
  for (let i = 1; i < newTailPosition; i++) {
    newTail = newTail.next
  }

  const newHead = newTail.next
  newTail.next = null
  listTail.next = head
  return newHead
}

const linkedList = generateLinkedList([0, 1, 2, 3, 4, 5])
console.log(shiftLinkedList(linkedList, -18))
