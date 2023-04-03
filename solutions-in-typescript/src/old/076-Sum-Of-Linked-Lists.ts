class LinkedList {
  value: number
  next: LinkedList | null

  constructor(value: number) {
    this.value = value
    this.next = null
  }
}

const sumOfLinkedLists = (l1: LinkedList | null, l2: LinkedList | null) => {
  let carry = 0
  let l3 = new LinkedList(0)
  let head = l3

  while (l1 || l2 || carry) {
    if (l1) {
      carry += l1.value
      l1 = l1.next
    }

    if (l2) {
      carry += l2.value
      l2 = l2.next
    }

    const value = carry % 10
    carry = Math.floor(carry / 10)

    l3.next = new LinkedList(value)
    l3 = l3.next
  }

  return head.next!
}

const l1 = new LinkedList(2)
l1.next = new LinkedList(4)
l1.next.next = new LinkedList(7)
l1.next.next.next = new LinkedList(1)

const l2 = new LinkedList(9)
l2.next = new LinkedList(4)
l2.next.next = new LinkedList(5)

console.log(sumOfLinkedLists(l1, l2))
