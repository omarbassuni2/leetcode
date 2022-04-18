/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function(root1, root2) {
    if(root1 == null && root2 == null) return null;
    const val = (root1?.val || 0) + (root2?.val || 0) ;
    root1 = new TreeNode(val, root1?.left, root1?.right);
    root1.left = mergeTrees(root1?.left, root2?.left);
    root1.right = mergeTrees(root1?.right, root2?.right);
    return root1;
};