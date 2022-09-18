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
var isValidBST = function(root) {
    var recursion = function(root, left, right){
        if(!root)   return true;
        if(!(left < root.val && root.val < right))     return false;
        return recursion(root.left, left, root.val) && recursion(root.right, root.val, right);
    }
    return recursion(root, -Infinity, Infinity);
};