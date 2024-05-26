/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if(!head.next && n === 1)   return null;
    const newHead = new ListNode();
    newHead.next = head;
    let iter = head, len = 2;
    while(iter.next) {
        iter = iter.next
        len += 1;
    }
    let posIndex = len - n - 1, node = newHead;
    while(posIndex) {
        node = node?.next;
        posIndex -= 1;
    }
    node.next = node.next.next;
    return newHead.next;
};