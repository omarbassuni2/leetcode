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
var lowestCommonAncestor = function(root, p, q) {
    if(root.val < p.val && root.val < q.val) {              // this is BST. If root is less than both then go right
       return lowestCommonAncestor(root.right, p, q);       
    }
    if(root.val > p.val && root.val > q.val) {       // this is BST. if root is greater than both then go left
        return lowestCommonAncestor(root.left, p, q);
    }
    else {
        return root;                                        // else it equals one of the values then return the root 
    }

};