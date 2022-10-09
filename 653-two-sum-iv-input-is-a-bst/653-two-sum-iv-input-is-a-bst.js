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
 * @return {boolean}
 */
var findTarget = function(root, k) {
    const hashmap = {};
    var dfs = function(root){
        if(!root)   return;
        const remainder = k - root.val;
        if(hashmap[remainder])      return true;
        if(!hashmap[root.val])      hashmap[root.val] = 1;
        else                        hashmap[root.val] += 1;
        return (dfs(root.left) || dfs(root.right))
    }
    return dfs(root) || false;
};