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
 * @return {number[]}
 */

/*
    The idea is to use Level order traversal (BFS), and before each level traversal, you should add the right most element in the queue to your output.
    Then proceed normally with your BFS, but you be careful before putting any null node in my current implementation because it messes up the logic
*/
var rightSideView = function(root) {
    const output = [], queue = [root];
    while(queue.length)  {
        const len = queue.length;
        queue[len - 1] && output.push(queue[len - 1].val);
        for(let i = 0;  i < len; i += 1) {
            const shifted = queue.shift();
            if(!shifted) continue;
            shifted.left && queue.push(shifted.left);
            shifted.right && queue.push(shifted.right);
        }
    }      
    return output;
};