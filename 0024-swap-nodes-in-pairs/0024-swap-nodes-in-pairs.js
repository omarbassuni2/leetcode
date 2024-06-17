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
var swapPairs = function(head) {
    if(!head)     return head;
    const dummy = new ListNode(0, head);
    let prev = dummy, left = head, right = head.next;
    while(left && right) {
        // Save next pairs
        const nextPair = right.next;
        
        // Swap nodes
        const oldRightNext = right.next;
        right.next = left;
        left.next = oldRightNext;
        
        // prev.next should be pointing to the new left
        prev.next = right
        
        // advance pointers 
        prev = left
        if(!nextPair)   break;
        left = nextPair;
        right = nextPair.next;
    }
    return dummy.next;
};