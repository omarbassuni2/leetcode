/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    const visited = new Set();
    while(head){
        if(visited.has(head))   return true;
        else    visited.add(head);
        head = head.next;
    }
    return false;
};