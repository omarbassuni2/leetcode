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
 * @return {number[][]}
 */

var levelOrder = function(root) {
    if(!root)   return [];
    const queue = [root], output = [];
    while(queue.length) {
        const tempOutput = [], len = queue.length;
        for(let i = 0; i < len; i += 1) {
            const curr = queue.shift();
            tempOutput.push(curr.val);
            curr.left && queue.push(curr.left);
            curr.right && queue.push(curr.right);
        }
        output.push(tempOutput);
    }
    return output;
};