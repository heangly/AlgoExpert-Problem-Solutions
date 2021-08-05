import Foundation


class LinkedList {
    var value: Int
    var next: LinkedList?

    init(value: Int) {
        self.value = value
    }
}

// Time: O(n) | Space: O(1)
func removeDuplicatesFromLinkedList(_ linkedList: LinkedList) -> LinkedList {
    var curr: LinkedList?
    curr = linkedList

    while let unwrappedCurr = curr {
        if unwrappedCurr.value == unwrappedCurr.next?.value {
            unwrappedCurr.next = unwrappedCurr.next?.next
        }else {
            curr = unwrappedCurr.next
        }
    }
    
    return linkedList
}

func traverse(linkedList: LinkedList) {
    var curr: LinkedList?
    curr = linkedList
    
    while let unwrappedCurr = curr {
        print(unwrappedCurr.value)
        curr = unwrappedCurr.next
    }
}


var linkedlist = LinkedList(value: 1)
linkedlist.next = LinkedList(value: 1)
linkedlist.next?.next = LinkedList(value: 3)
linkedlist.next?.next?.next = LinkedList(value: 4)
linkedlist.next?.next?.next?.next = LinkedList(value: 4)
linkedlist.next?.next?.next?.next?.next = LinkedList(value: 4)
linkedlist.next?.next?.next?.next?.next?.next = LinkedList(value: 5)
linkedlist.next?.next?.next?.next?.next?.next?.next = LinkedList(value: 6)
linkedlist.next?.next?.next?.next?.next?.next?.next?.next = LinkedList(value: 6)


var k = removeDuplicatesFromLinkedList(linkedlist)
traverse(linkedList: k)


