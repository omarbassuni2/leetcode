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
    const map = new Map();
    const queue = [node];
    map.set(node.val, new Node(node.val));
    while(queue.length){
        const tempNode = queue.shift();
        (tempNode.neighbors).forEach((element) => {
            if(!map.get(element.val)){
                map.set(element.val, new Node(element.val));
                queue.push(element);
            }
            map.get(tempNode.val).neighbors.push(map.get(element.val));
        })
    }
    return map.get(node.val);
}; 