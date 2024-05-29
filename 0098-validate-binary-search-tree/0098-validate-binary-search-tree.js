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
function bst(root, lowerBound, upperBound) {
    if(!root)   return true;
    if(!(lowerBound < root.val && root.val < upperBound))   return false;
    return bst(root.left, lowerBound, root.val) && bst(root.right, root.val, upperBound);
}
var isValidBST = function(root) {
    return bst(root, -Infinity, Infinity);
};