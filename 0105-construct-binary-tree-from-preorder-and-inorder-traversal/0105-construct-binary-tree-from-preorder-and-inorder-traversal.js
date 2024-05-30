/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 
 preorder = [3,9,20,15,7],
 inorder  = [9,3,15,20,7]
 */
var buildTree = function(preorder, inorder) {
    if(!preorder.length || !inorder.length) return null;
    const root = new TreeNode(preorder[0]);
    const index = inorder.indexOf(preorder[0]);
    root.left = buildTree(preorder.slice(1, index + 1), inorder.slice(0, index + 1));
    root.right = buildTree(preorder.slice(index + 1), inorder.slice(index + 1));
    return root;
};