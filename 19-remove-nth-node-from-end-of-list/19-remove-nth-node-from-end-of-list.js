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
    if(head.next == null && n == 1) return head.next;
    let queue = [];
    const root = head;
    let tail = head;
    let counter = 0;
    while(head != undefined){
        if(queue.length < n)    queue.push(head);
        else{
            tail = queue.shift();
            queue.push(head);
        }
        head = head.next;
        counter += 1;
    }
    if(counter == n)    return root.next;
    const toBeRemoved = tail.next;
    tail.next = toBeRemoved.next;
    return root;
};