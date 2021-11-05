var addTwoNumbers = function (l1, l2) {
  let l3 = new ListNode(0)
  let ans = l3
  let carry = 0

  while (l1 || l2 || carry) {
    if (l1) {
      carry += l1.val
      l1 = l1.next
    }

    if (l2) {
      carry += l2.val
      l2 = l2.next
    }

    l3.val = carry % 10
    carry = Math.floor(carry / 10)

    if (l1 || l2 || carry) {
      l3.next = new ListNode(0)
      l3 = l3.next
    }
  }

  return ans
}
