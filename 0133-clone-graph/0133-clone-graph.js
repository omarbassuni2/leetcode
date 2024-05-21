/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */
/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    if(!node)   return null;
    const queue = [node];
    const hashMap = new Map();
    hashMap.set(node.val, new Node(node.val));
    while(queue.length){
        const popNode = queue.shift();
        const childern = popNode.neighbors;
        for(var i = 0; i < childern.length; i += 1){
            if(!hashMap.get(childern[i].val)){
                hashMap.set(childern[i].val, new Node(childern[i].val));
                queue.push(childern[i]);
            }
            hashMap.get(popNode.val).neighbors.push(hashMap.get(childern[i].val));
        }
    }
    return hashMap.get(node.val);
};