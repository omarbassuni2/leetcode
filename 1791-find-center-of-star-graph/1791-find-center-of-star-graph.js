/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
    let center = edges[0][0];
    if(center == edges[1][0])   return center;
    if(center == edges[1][1])   return center;
    return edges[0][1];
};