/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
        l1 = [9,9,9,9,9,9,9], 
        l2 = [9,9,9,9]0,0,0
              8,9,9,9,0,0,0     add new node 1
carry         1,1,1,1,1,1,1

l1 = [2,4,3], l2 = [5,6,4,5]
 */
var addTwoNumbers = function(l1, l2) {
    const dummy = new ListNode();
    let curr = dummy; 
    let carry = 0;
    while(l1 || l2) {
        const sum = (l1?.val || 0) + (l2?.val || 0) + carry;
        carry = Math.floor(sum / 10);
        curr.next = new ListNode(sum % 10, undefined);
        curr = curr.next;
        if(l1)  l1 = l1.next;
        if(l2)  l2 = l2.next;
        if(!l1 && !l2 && !!carry)  {
            curr.next = new ListNode(carry, undefined);
        }
    }
    return dummy.next;
};