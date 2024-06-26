/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

/*
    The idea is to check left and right subtrees, if both branches returned nodes, this means, the current node is the lowest common ancestor.
    If only one branch returned a node and the other returned null, this means that both p & q exist in the branch that returned that node,
    and by extension means, that the node that was returned is the lowest common ancestor
*/
var lowestCommonAncestor = function(root, p, q) {
    if(!root)   return null;
    if(root === q || root === p)    return root;
    const left = lowestCommonAncestor(root.left, p, q), right = lowestCommonAncestor(root.right, p, q);
    // If left and right returned two nodes this means, that the current node is the lowest common ancestor
    if(left && right)   return root;
    // If only one branch of the two returned a node, then it means that branch has the two node 
    // and by extension means, that node is the lowest common ancestor
    return left || right;
};