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
    const stack = [];
    traverse = function(root, stackLen){
        if(!root)   return null;
        traverse(root.left, stackLen + 1);
        stack.push(root.val);
        if(stackLen == k + 1)   return;
        traverse(root.right, stackLen + 1);
    }
    traverse(root, 0);
    console.log(stack);
    return stack[k - 1];
};