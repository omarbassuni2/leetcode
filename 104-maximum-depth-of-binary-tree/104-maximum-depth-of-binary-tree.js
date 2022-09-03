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
var maxDepth = function(root) {
    if(!root)   return 0;
    let maxDep = -Infinity;
    var recursion = function(level, root){
        if(!root?.left && !root?.right){
            maxDep = Math.max(maxDep, level);
            return;
        }
        recursion(level + 1, root.left);
        recursion(level + 1, root.right);
    }
    recursion(1, root);
    return maxDep;
};