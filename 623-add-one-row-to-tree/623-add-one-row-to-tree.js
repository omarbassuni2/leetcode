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
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
var addOneRow = function(root, val, depth) {
    if(depth == 1)      return new TreeNode(val, root, null);
    function dfs(currDep, root) {
        if(!root)   return;
        if(depth - currDep == 1){
            const tempLeft = root.left , tempRight = root.right;
            root.left = new TreeNode(val, tempLeft), root.right = new TreeNode(val, null,tempRight);
            return;
        }
        dfs(currDep + 1, root.left);
        dfs(currDep + 1, root.right);
    }
    dfs(1, root);
    return root;
};