/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if(!root)    return root;
    const hashMap = new Map();
    populateTable = function(root, level){
        if(!root)   return null;
        if(hashMap.get(level)){
            let prevArr = hashMap.get(level);
            let prevNode = prevArr[prevArr.length - 1];
            prevNode.next = root;
            root.next = null;
            hashMap.set(level, [...prevArr, root]);
        }else{
            root.next = null;
            hashMap.set(level, [root]);
        }
        populateTable(root.left, level + 1);
        populateTable(root.right, level + 1);
    }
    populateTable(root, 0);
    newRoot = hashMap.get(0)[0];
    return newRoot;
};