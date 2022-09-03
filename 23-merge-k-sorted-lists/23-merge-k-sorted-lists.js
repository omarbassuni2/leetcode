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
    let root = new ListNode(0, null);
    const output = root;
    let isListsContainVal = true;
    while(lists.length){
        let removedCounter = 0;
        lists.forEach((ele, i) =>{
         if(ele == null){
             lists = [...lists.slice(0, i - removedCounter), ...lists.slice(i + 1 - removedCounter)];
                removedCounter += 1;
         }
        });
        if(lists.length == 0)   break;
        lists = lists.sort((a,b) => { return a.val-b.val});
        root.next = lists[0];
        root = root.next;
        lists[0] = lists[0]?.next;
        removedCounter = 0;
    }
    return output.next;
};