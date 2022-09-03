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
    let removedCounter = 0;
    lists.forEach((ele, i) =>{
        if(ele == null){
            lists = [...lists.slice(0, i - removedCounter), ...lists.slice(i + 1 - removedCounter)];
            removedCounter += 1;
        }
    });
    while(lists.length){
        lists = lists.sort((a,b) => { return a.val-b.val});
        root.next = lists[0];
        root = root.next;
        lists[0] = lists[0]?.next;
        removedCounter = 0;
        for(var i = 0; i < lists.length; i += 1){
            if(lists[i] == null){
                lists = [...lists.slice(0, i  - removedCounter), ...lists.slice(i + 1  - removedCounter)];
                removedCounter += 1;
            }
        }
    }
    return output.next;
};