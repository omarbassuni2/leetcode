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
 * @return {number}
 */
/*
    The idea is to calculate the diameter at each node which is left + right, and to have a variable max to get updated at each node to take the
    biggest max
*/
var diameterOfBinaryTree = function(root) {
    let max = -Infinity;
    function dfs(root) {
        if(!root)   return 0;
        const left = dfs(root.left);
        const right = dfs(root.right);
        max = Math.max(max, left + right);
        return Math.max(left, right) + 1;
    };
    dfs(root);
    return max;
};