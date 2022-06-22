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
var middleNode = function(head) {
    let currNode = head;
    let mid = 0;
    while(currNode){
        currNode = currNode.next;
        mid+=1;
    }
    mid = Math.floor(mid / 2);
    let leftIter = 0;
    while(leftIter != mid){
        head = head.next;
        leftIter += 1;
    }
    return head;
};