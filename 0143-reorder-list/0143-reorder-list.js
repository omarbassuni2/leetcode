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
    // Reach the second middle node
    let slow = head, fast = head;
    while(fast && fast.next)  slow = slow.next, fast = fast.next.next;
    // Reverse the second half of the list. PS: slow will null and prev will be the last node in the list
    let prev = null;
    while(slow) {
        const temp = slow.next;
        slow.next = prev;
        prev = slow;
        slow = temp;
    }
    
    // Merge using two pointers. loop until the second half reachs its null point that we initialized. and reverse
    let left = head, right = prev;
    while(right.next) {
        const leftLink = left.next, rightLink = right.next;
        left.next = right;
        right.next = leftLink;
        left = leftLink, right = rightLink;
    }
};