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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    const stack = [root.val];
    traverse = function(root){
        if(!root)   return null;
        stack.push(root.val);
        traverse(root.left);
        traverse(root.right);
    }
    traverse(root.left);
    if(stack.length < k){
        traverse(root.right);
    }
    stack.sort(function(a, b){ return a-b;});
    return stack[k - 1];
};