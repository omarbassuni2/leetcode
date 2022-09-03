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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    const output = root;
    var recursion = function(root){
        if(!root?.left && !root?.right)   return;
        const temp = root.left;
        root.left = root.right;
        root.right = temp;
        recursion(root.left);
        recursion(root.right);

    }
    recursion(root);
    return output;
};