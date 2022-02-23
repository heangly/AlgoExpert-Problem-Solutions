class LinkList {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

const findLoop = (head) => {
  const seen = new Map()
  let currNode = head

  while (currNode) {
    if (seen.has(currNode)) return currNode
    seen.set(currNode, true)
    currNode = currNode.next
  }
}
