import UIKit

class LinkedList {
    var value: Int
    var next: LinkedList?
    
    init(value: Int){
        self.value = value
    }
}

func removeDuplicatesFromLinkedList(_ linkedList: LinkedList) -> LinkedList {
    var currNode: LinkedList? = linkedList
    
    while var unwrappedNode = currNode {
        if unwrappedNode.value == unwrappedNode.next?.value {
            unwrappedNode.next = unwrappedNode.next?.next
        }else{
            currNode = unwrappedNode.next
        }
    }
    
    
    return linkedList
}
