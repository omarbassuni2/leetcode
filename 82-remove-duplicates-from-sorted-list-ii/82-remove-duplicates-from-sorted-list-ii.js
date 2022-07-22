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
var deleteDuplicates = function(head) {
    const dummy = new ListNode(-101, head);
    let prev = dummy;
    while(head){
          if(head.val == head.next?.val){
                while(head.val == head.next?.val){
                    head = head.next; //will stop at the last three in the first example
                }
                prev.next = head.next; //to point to the four not the three  in the first example
           }
           else{
               prev = prev?.next;
           }
           head = head.next;
    }
    return dummy.next;
};