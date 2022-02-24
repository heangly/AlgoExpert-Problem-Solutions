const generateLinkedList = (arr) => {
  let linkList = new LinkedList(arr[0])
  let head = linkList
  for (let i = 1; i < arr.length; i++) {
    linkList.next = new LinkedList(arr[i])
    linkList = linkList.next
  }
  return head
}

class LinkedList {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

const mergeLinkedLists = (headOne, headTwo) => {
  let p1 = headOne
  let p1Prev = null
  let p2 = headTwo

  while (p1 && p2) {
    if (p1.value < p2.value) {
      p1Prev = p1
      p1 = p1.next
    } else {
      if (p1Prev) {
        p1Prev.next = p2
      }
      p1Prev = p2
      p2 = p2.next
      p1Prev.next = p1
    }
  }

  if (p1) p1Prev.next = p2
  return headOne.value < headTwo.value ? headOne : headTwo
}

// Time: O(n) where n is the length of headOne and headTwo, Space: O(n)
// const mergeLinkedLists = (headOne, headTwo) => {
//   let linkList = new LinkedList(null)
//   const head = linkList

//   while (headOne && headTwo) {
//     let value = null

//     if (headOne.value < headTwo.value) {
//       value = headOne.value
//       headOne = headOne.next
//     } else {
//       value = headTwo.value
//       headTwo = headTwo.next
//     }

//     linkList.next = new LinkedList(value)
//     linkList = linkList.next
//   }

//   if (headOne) {
//     linkList.next = headOne
//   }

//   if (headTwo) {
//     linkList.next = headTwo
//   }

//   return head.next
// }

const headOne = generateLinkedList([2, 6, 7, 8])
const headTwo = generateLinkedList([1, 3, 4, 5, 9, 10])
let ans = mergeLinkedLists(headOne, headTwo)
const arr = []
while (ans) {
  arr.push(ans.value)
  ans = ans.next
}

console.log(arr)
