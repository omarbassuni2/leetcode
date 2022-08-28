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
var reverseList = function(head) {
    /*
    [1 -> 2 -> 3 -> 4 -> 5 -> null]
    [null <- 1 <- 2 <- 3 <- 4 <- 5]
    */
    let previous = null;
    while(head){
        let nextInList = head.next;
        head.next = previous;
        previous = head;
        head = nextInList;
    }
    return previous;
};