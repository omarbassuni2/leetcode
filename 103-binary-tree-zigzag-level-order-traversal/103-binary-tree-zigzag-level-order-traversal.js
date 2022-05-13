/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if(!root)   return [];
    if(!root?.left && !root?.right)   return [[root?.val]];
    let hashMap = new Map();
    traverse = function(root, level){
        if(!root)   return;
        if(hashMap.get(level)){
            let prevArr = hashMap.get(level);
            prevArr.push(root.val);
            hashMap.set(level, [...prevArr]);
        }else{
            hashMap.set(level, [root.val]);
        }
        traverse(root.left, level + 1);
        traverse(root.right, level + 1);
    }
    traverse(root, 0);
    for(let [key, value] of hashMap){
        if(key % 2 != 0){
            value = value.reverse();
        }
        hashMap.set(key, value);
    }
    return [...hashMap.values()];
};