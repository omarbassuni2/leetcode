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
    const hashTable = [];
    let levelOfNode = 0;
    traverse(root, levelOfNode);
    function traverse(root, levelOfNode){
        if(root == undefined)  return null;
        if(!hashTable[levelOfNode]){
            hashTable[levelOfNode] = [root.val];
        }else{
            hashTable[levelOfNode].push(root.val);
        }
        levelOfNode += 1;
        traverse(root.left, levelOfNode);
        traverse(root.right, levelOfNode);
    }
    return hashTable;
};
