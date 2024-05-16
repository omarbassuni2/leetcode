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
function recursion(r, sR) {
    if(!r || !sR) return !r && !sR;  // Returns true if both are null, returns false if only one is null
    if(r.val !== sR.val)    return false;
    return recursion(r.left, sR.left) && recursion(r.right, sR.right); 
}
var isSubtree = function(root, subRoot) {
    if(!root)   return !subRoot;
    return recursion(root, subRoot) || isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};