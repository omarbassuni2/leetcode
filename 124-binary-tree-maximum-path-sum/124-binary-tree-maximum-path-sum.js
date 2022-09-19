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
 * @return {number}
 */
var maxPathSum = function(root) {
    let output = -Infinity;
    var recursion = function(root){
        if(!root)   return 0;
        let maxLeftSum = recursion(root.left);
        let maxRightSum = recursion(root.right);
        maxLeftSum = Math.max(maxLeftSum, 0);
        maxRightSum = Math.max(maxRightSum, 0);
        
        //here we update the output and it's different from updating a path, because a path can go right and left only for some node but not every node
        
        output = Math.max(output, root.val + maxLeftSum + maxRightSum);
        
        //here we return the max of the two paths added by our value
        return root.val + Math.max(maxLeftSum, maxRightSum);
    }
    recursion(root);
    return output;
};