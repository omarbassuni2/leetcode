/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    if(source == destination)    return true;
    const mapOfNodes = new Map();
    const setOfVisited = new Set();
    for(const [startEdge, endEdge] of edges){
        if(mapOfNodes.get(startEdge))   mapOfNodes.set(startEdge, [...mapOfNodes.get(startEdge),endEdge]);
        else    mapOfNodes.set(startEdge, [endEdge]);
        if(mapOfNodes.get(endEdge))   mapOfNodes.set(endEdge, [...mapOfNodes.get(endEdge), startEdge]);
        else    mapOfNodes.set(endEdge, [startEdge]);
    };
    const queue = mapOfNodes.get(source);
    while(queue.length){
        const currNode = queue.shift();
        if(!setOfVisited.has(currNode)){
            if(currNode == destination) return true;
            else{
                queue.push(...mapOfNodes.get(currNode));
            }
        }
        setOfVisited.add(currNode);

    }
    return false;
};