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
    The idea is to run a dfs on left and right. And this dfs should check for three things
    that left value equals right value and then we run dfs(left.left, right.right) and dfs(left.right, right.left);
    and our base case is if(!p || !q)   return !p && !q;
*/
var isSymmetric = function(root) {
    function dfs(left, right) {
        if(!left || !right) return !left && !right;
        return left.val === right.val && dfs(left.left, right.right) && dfs(left.right, right.left);
    }
    return dfs(root.left, root.right);
};