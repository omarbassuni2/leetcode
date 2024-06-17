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
var swapPairs = function(head) {
        /*
    The idea is to use 3 pointers. Left and right to swap the two node. and prevPair to update links between pairs.
    
    The trick is using prevPair the right way. 
    
    After swapping nodes, we make prevPair.next point to the new left
    When we advance prevPair it should point to the new right, so in the next iteration 
    prevPair can point to the swapped node of the next pair
    */
    if(!head)     return head;
    const dummy = new ListNode(0, head);
    let prevPair = dummy, left = head, right = left.next;
    while(left && left.next) {
        // Save next pairs
        const nextPair = right.next;
        
        // Swap nodes
        const oldRightNext = right.next;
        right.next = left;
        left.next = oldRightNext;
        
        // prevPair.next should be pointing to the new left
        prevPair.next = right
        
        // advance pointers 
        if(!nextPair)   break;
        prevPair = left
        left = nextPair;
        right = nextPair.next;
    }
    return dummy.next;
};