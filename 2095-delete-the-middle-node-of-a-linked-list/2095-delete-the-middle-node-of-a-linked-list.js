/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function(head) {
    if(!head.next)      return null;
    let slowPointer = head, fastPointer = head, prev = head;
    while(fastPointer && fastPointer.next){
        fastPointer = fastPointer.next.next;
        prev = slowPointer;
        slowPointer = slowPointer.next;
    }
    prev.next = prev.next.next;
    return head;
};