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
// Another solution creating a cycle and looping until finding the right node to cut the linked list to two halves
// And return the second half head: https://leetcode.com/problems/rotate-list/discuss/1838161/Algo-Explained-or-Easy-or-JS-or-97-fast-or-Commented
var rotateRight = function(head, k) {
    let counter = 0, iter = head;
    while(iter) {
        counter += 1;
        iter = iter.next;
    }
    // allowing only rotation less than counter and using dummy to handle lists with 1 and two nodes 
    k = counter > k ? k : k % counter; // counter = 5, k = 10, 12 
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