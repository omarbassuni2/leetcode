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
        const leftSubtree = root.left ? recursion(root.left) : root.val;
        const rightSubtree = root.right ? recursion(root.right) : root.val;
        const currAndLeftSubtree = root.left ? root.val + leftSubtree : root.val;
        const currAndRightSubtree = root.right ? root.val + rightSubtree : root.val;
        const currAndLeftAndRightSubtrees = root.left && root.right ? root.val + leftSubtree + rightSubtree : root.val;
        const listOfVals = [root.val, currAndRightSubtree,
                            currAndLeftSubtree,
                            currAndLeftAndRightSubtrees];
        output = Math.max(...listOfVals, output);
        return Math.max(root.val, currAndLeftSubtree, currAndRightSubtree);
    }
    recursion(root);
    return output;
};