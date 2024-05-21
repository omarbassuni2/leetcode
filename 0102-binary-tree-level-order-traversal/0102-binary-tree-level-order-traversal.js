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

var levelOrder = function(root) {
    if(!root)   return [];
    const output = {};
    var recursion = function(root, level) {
        if(!root)   return;
        if(output[level]) {
            output[level].push(root.val);
        }
        else {
            output[level] = [root.val];
        }
        recursion(root.left, level + 1);
        recursion(root.right, level + 1);
    }
    recursion(root, 0);
    return Object.values(output);
};