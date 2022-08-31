/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    let slow = head, fast = head.next;
    while(fast && fast.next){  //fast is 2 times faster than slow, when fast reaches the end slow will become the mid of the Linkedlist
        slow = slow.next;
        fast = fast.next.next;
    }
    let secondHalf = slow.next;
    let previousNode =  null;
    slow.next = null;
    while(secondHalf){  //reverse the linked list by making each node point at the previous node
        let temp = secondHalf.next;
        secondHalf.next = previousNode;
        previousNode = secondHalf;
        secondHalf = temp;
    }
    let first = head;
    secondHalf = previousNode;
    while(secondHalf){  //merge the two lists, previousNode is now the last element in the original linked list
        let firstNodeTemp = first.next, secondNodeTemp = secondHalf.next;
        first.next = secondHalf;
        secondHalf.next = firstNodeTemp;
        first = firstNodeTemp;
        secondHalf = secondNodeTemp;
        
    }
    console.log(head);
    return head;
};