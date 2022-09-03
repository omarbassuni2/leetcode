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
    var findMin = function(lists){
        let minVal = Infinity;
        let minNode = null;
        let iterator = -1;
        lists.forEach((ele, i) => {
           if(ele.val < minVal){
               minVal = lists[i].val;
               minNode = lists[i];
               iterator = i;
           } 
        });
        lists[iterator] = lists[iterator].next;
        return minNode;
    }
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
        let minNode = findMin(lists);
        root.next = minNode;
        root = root.next;
    }
    
    return output.next;
};