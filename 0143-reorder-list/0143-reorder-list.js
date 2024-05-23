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
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next
    }
    // 1 -> 2 -> 3 -> 4
    // reverse second half
    // 1 -> 2 -> null | null <- 3 <- 4
    let secondHalf = slow.next, prev = null;
    slow.next = null;
    while(secondHalf) {
        const tmp = secondHalf.next;
        secondHalf.next = prev;
        prev = secondHalf;
        secondHalf = tmp;
    }
    // Merge
    // 1 -> 2 -> null | null <- 3 <- 4
    // 1 -> 4 .. 4 -> 2
    // 2 -> 3 .. 3 -> null (null here came from tmp1)
    let l = head, r = prev;
    while(r) {
        const tmp1 = l.next, tmp2 = r.next;
        l.next = r;
        r.next = tmp1;
        l = tmp1, r = tmp2;
    }
};