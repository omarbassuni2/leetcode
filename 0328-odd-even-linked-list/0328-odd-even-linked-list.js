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
var oddEvenList = function(head) {
    /*
        The idea is to keep the even head, and make the odd head is the last odd node.
        make odd next point to even next, then advance odd. Now odd's next is an even node,
        so we make even next = new odd next and then advance the even.
        Now after we made all evens and odds connected to each other, we need to connect them together,
        so we make the last odd head.next point to the evenHead
    */
    if(!head || !head.next) return head;
    let odd = head, even = head.next;
    const evenHead = head.next;
    while(even && even.next) {
        odd.next = even.next;
        odd = odd.next;
        even.next = odd.next;
        even = even.next;
    }
    odd.next = evenHead;
    return head;
};