class LinkedList {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

function sumOfLinkedLists(linkedListOne, linkedListTwo) {
  const head = new LinkedList(0)
  let curr = head
  let carry = 0

  let n1 = linkedListOne
  let n2 = linkedListTwo

  while (n1 || n2 || carry > 0) {
    const v1 = n1 ? n1.value : 0
    const v2 = n2 ? n2.value : 0
    const sum = v1 + v2 + carry

    const newVal = sum % 10
    const newNode = new LinkedList(newVal)
    curr.next = newNode
    curr = curr.next

    carry = Math.floor(sum / 10)
    n1 = n1 ? n1.next : null
    n2 = n2 ? n2.next : null
  }
  return head.next
}

const l1 = new LinkedList(2)
// l1.next = new LinkedList(0)
// l1.next.next = new LinkedList(0)
// l1.next.next.next = new LinkedList(5)

const l2 = new LinkedList(9)

console.log(sumOfLinkedLists(l1, l2))
