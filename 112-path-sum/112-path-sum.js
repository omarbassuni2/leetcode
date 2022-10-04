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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if(!root)   return false;
    function dfs(currSum, root){
        if(!root)    return false;
        if(root.val + currSum == targetSum && !root.left && !root.right)   return true;
        return (dfs(root.val + currSum, root.left) || dfs(root.val + currSum, root.right))
    }
    return dfs(0, root);
};