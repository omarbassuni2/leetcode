/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if(!p && !q)    return true;
    let isSame = true;
    var recursion = function(tree1, tree2){
        if(!tree1 && !tree2)    return;
        if(tree1?.val != tree2?.val){
           isSame = false; 
           return;   
        }
        recursion(tree1.left, tree2.left);
        recursion(tree1.right, tree2.right);
    }
    recursion(p, q);
    return isSame;
};