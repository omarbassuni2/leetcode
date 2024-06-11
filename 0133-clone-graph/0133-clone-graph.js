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
    // Create Root as a new node
    const mapOfNodes = { [node.val]: new Node(node.val)}, visited = new Set([node.val]);
    const queue = [node];
    while(queue.length) {
        const curr = queue.shift();
        // Create its childern and add them to the map
        curr.neighbors.forEach((child) => {
            if(!(child.val in mapOfNodes))  mapOfNodes[child.val] = new Node(child.val);
        // Make the new root have its new childern
            mapOfNodes[curr.val].neighbors.push(mapOfNodes[child.val])
            if(!visited.has(child.val)) {
                visited.add(child.val)
                queue.push(child);
            }
        })
    }
    return mapOfNodes[node.val];
};