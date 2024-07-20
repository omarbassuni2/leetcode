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
var reverseList = function(head) {
    if(!head)   return head;
    let prev = null, curr = head;
    while(curr) {
        const temp = curr.next;
        
        curr.next = prev;
        
        prev = curr;
        curr = temp;
    }
    return prev;
};