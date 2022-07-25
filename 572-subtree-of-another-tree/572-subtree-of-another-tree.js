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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    const checkEquality = function(root, subRoot){
        if(root?.val != subRoot?.val)     return false;
        if(!root && !subRoot)   return true;
        if(!root || !subRoot)   return false;
        return (checkEquality(root.left, subRoot.left)
        && checkEquality(root.right, subRoot.right));
    }
    const queue = [root];
    while(queue.length){
        const tempRoot = queue.shift();
        if(tempRoot?.val == subRoot?.val){
            const isEqual = checkEquality(tempRoot, subRoot);
            if(isEqual)     return isEqual;
        }
        if(tempRoot.left)   queue.push(tempRoot.left);
        if(tempRoot.right)  queue.push(tempRoot.right);
    }
    return false;
};