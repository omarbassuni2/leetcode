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
 * @return {boolean}
 */
/*
    The idea to have all leaves on the same level with 0 or 1 difference. E.g. A root node can have a left and right branches of the same height
    but a branch of them might be inbalanced itself. So we need to check recursively.
    We use dfs to call left and right heights. If the difference between left and right height is bigger than one we return -1 
    and we check if right or left return -1, we also return -1 in that case. 
    Then we return the max of left and right  + 1. And in we check if our dfs of root doesn't equal -1
*/
var isBalanced = function(root) {
    function dfs(root) {
        if(!root)   return 0;
        const left = dfs(root.left), right = dfs(root.right);
        if(Math.abs(left - right) > 1 || left === -1 || right === -1)  return -1;
        return Math.max(left, right) + 1;
    }
    return dfs(root) !== -1;
};