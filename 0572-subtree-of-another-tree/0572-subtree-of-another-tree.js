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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
/*
    The idea is navigate through the root childern nodes and use dfs on them with subRoot to check for equality. 
    so, create a dfs to check for equality, then return dfs of current root, subRoot 
    ORed with isSubtree(root.left, subRoot) ORed with isSubtree(root.right, subRoot)
*/
var isSubtree = function(root, subRoot) {
    if(!root)   return !subRoot;
    function dfs(p, q) {
        if(!p || !q)    return !p && !q;
        if(p.val !== q.val)     return false;
        return dfs(p.left, q.left) && dfs(p.right, q.right);
    }
    return dfs(root, subRoot) || isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};