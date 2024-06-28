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

/*
    The idea is to calculate the position of the node which is:
    
    left = (position - positionOfTheFirstNodeInLevel) * 2, right = (position - positionOfTheFirstNodeInLevel) * 2 + 1 
    PS: we subtract positionOfTheFirstNodeInLevel to avoid using BigInt in our variable calculations,
    so leftMost of every level becomes zero and rightmost becomes the count of indexes
    
    Each level the position starts from leftmost node at 0 and goes to the rightmost node while incrementing.
    And we should keep track of max by subtracting the position of the rightmost node in the level by its leftmost node position.
    The queue will have each element as [node, position]
    
    The above approach fails in a very long tree because now the position can become very large and needs special handling using BigInt,
    so instead of using BigInt manipulate all positions such that the position of a node in a level becomes:
    (position - positionOfTheFirstNodeInLevel) * 2 or (position - positionOfTheFirstNodeInLevel) * 2 + 1 
    
*/ 
var widthOfBinaryTree = function(root) {
    if(!root)   return 0;
    let max = 0;
    const queue = [[root, 0]];
    while(queue.length) {
        const len = queue.length, referencePoint = queue[0][1];
        max = Math.max(max, queue[len - 1][1] - queue[0][1] + 1);
        for(let i = 0; i < len; i += 1) {
            const [shifted, position] = queue.shift();
            shifted.left && queue.push([shifted.left, (position - referencePoint) * 2]);
            shifted.right && queue.push([shifted.right, ((position - referencePoint) * 2) + 1]);
        }
    }
    return max;
};