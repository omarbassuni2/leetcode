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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    const output = [];
    traverse = function(root){
        if(!root) return; 
        traverse(root?.left);
        output.push(root?.val);
        traverse(root?.right);
    }
    traverse(root);
    return output;
};