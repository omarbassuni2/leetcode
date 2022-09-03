/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

var mergeKLists = function(lists) {
    const root = new ListNode();
    let nodeIter = root;
    let allAsArray = [];
    for(var i = 0; i < lists.length; i += 1){
        while(lists[i]){
            allAsArray.push(lists[i].val);
            lists[i] = lists[i].next;
        }
    }
    allAsArray = allAsArray.sort((a,b) => { return a-b;});
    allAsArray.forEach((ele) => {
        nodeIter.next = new ListNode(ele);
        nodeIter = nodeIter.next;
    });
    return root.next;
};