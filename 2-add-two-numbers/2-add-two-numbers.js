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
 */
let remainder = 0;
var addTwoNumbers = function(l1, l2) {
    if(l1 == null && l2 == null && remainder == 0)  return null;
    if(l1 == null && l2 == null && remainder != 0){
        l1 = new ListNode(remainder, null);
        return l1;
    }
    const valOfL1 = l1?.val || 0;
    const valOfL2 = l2?.val || 0;
    const sum = valOfL1 + valOfL2 + remainder;
    if(l1)  l1.val = (sum > 9) ?  (sum % 10) : sum ;
    if(!l1)  {
        const val = (sum > 9) ?  (sum % 10) : sum ;
        l1 = new ListNode(val, null);
    }
    remainder = (sum > 9) ? Math.floor(sum / 10) :  0;
    l1.next = addTwoNumbers(l1?.next, l2?.next);
    remainder = 0;
    return l1;
};