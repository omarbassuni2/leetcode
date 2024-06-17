/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    let counter = 0, iter = head;
    while(iter) {
        counter += 1;
        iter = iter.next;
    }
    k = counter > k ? k : k - Math.floor(k / counter) * counter; // counter = 5, k = 10, 12 
    if(k === 0)   return head;
    const dummy  = new ListNode(0, head);
    let left = dummy, right = dummy;
    while(k > 0) {
        k -= 1;
        right = right.next;
    }
    while(right.next) {
        right = right.next;
        left = left.next;
    }
    // save left.next, left.next = null, right.next = head, dummy.next = saved leftNext
    const leftNext = left.next;
    left.next =  null;
    right.next = head;
    dummy.next = leftNext;
    return dummy.next;
};