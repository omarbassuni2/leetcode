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
    const queue = [node], map = {};
    map[node.val] = new Node(node.val);
    while(queue.length) {
        const tmp = queue.shift();
        for(let i = 0; i < tmp.neighbors.length; i += 1) {
            if(!map[tmp.neighbors[i].val]) {
                map[tmp.neighbors[i].val] = new Node(tmp.neighbors[i].val);
                queue.push(tmp.neighbors[i])
            }
            map[tmp.val].neighbors.push(map[tmp.neighbors[i].val]);
        }
    }
    return map[node.val]
};