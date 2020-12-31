class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeKthNodeFromEnd(head, k) {
  // Write your code here.
  let length = 0;
  let curr = head;
  // get length;
  while (curr) {
    length++;
    curr = curr.next;
  }

  let indexToRemove = length - k;

  if (indexToRemove === 0) {
    head.value = head.next.value;
    head.next = head.next.next;
    return;
  }

  let count = 0;
  curr = head;
  let temp;
  while (count !== indexToRemove && curr) {
    temp = curr;
    curr = curr.next;
    count++;
  }
  temp.next = temp.next.next;
}

let node = new LinkedList(0);
node.next = new LinkedList(1);
node.next.next = new LinkedList(2);
node.next.next.next = new LinkedList(3);
node.next.next.next.next = new LinkedList(4);
node.next.next.next.next.next = new LinkedList(5);
node.next.next.next.next.next.next = new LinkedList(6);
node.next.next.next.next.next.next.next = new LinkedList(7);
node.next.next.next.next.next.next.next.next = new LinkedList(8);
node.next.next.next.next.next.next.next.next.next = new LinkedList(9);

console.log(removeKthNodeFromEnd(node, 10));
