/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 
 preorder = [3,9,20,15,7],
 inorder  = [9,3,15,20,7]
 */
/*
    The trick is to use slicing preorder and inorder arrays the right way. We know that the first node of preorder is the current node aka Root Node,
    we find its index in the inorder list, before that index is left node array and after it is right array.
    
    we build the current node, then assign its left and right using recursion and returning the curr root.
    our base case if any list is empty we return null because we don't want to add dummy nodes as leaves
*/


var buildTree = function(preorder, inorder) {
   if(!preorder.length || !inorder.length)  return null;
    const root = new TreeNode(preorder[0]);
    const rootIndex = inorder.indexOf(root.val); // before that index is left length and after it is right length
    root.left = buildTree(preorder.slice(1, rootIndex + 1), inorder.slice(0, rootIndex + 1));
    root.right = buildTree(preorder.slice(rootIndex + 1), inorder.slice(rootIndex + 1));    
    return root;
};