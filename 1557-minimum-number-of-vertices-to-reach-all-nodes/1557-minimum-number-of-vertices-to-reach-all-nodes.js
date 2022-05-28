/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = function(n, edges) {
    const output = [];
    const map = {};
    for(let [index, value] of edges){
        map[value] = 1;
    }
    for(var i = 0; i < n; i += 1){
        if(!map[i]) output.push(i);
    }
    
    return output;
};