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
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    if(!root)   return [];
    const output = [];
    function dfs(root, currSum, currPath) {
        if(!root.left && !root.right) {
            currSum === targetSum && output.push(currPath.slice());
            return;
        }
        root.left && dfs(root.left, currSum + root.left.val, [...currPath, root.left.val]);
        root.right && dfs(root.right, currSum + root.right.val, [...currPath, root.right.val]);
    }
    
    dfs(root, root.val, [root.val])
    return output; 
};