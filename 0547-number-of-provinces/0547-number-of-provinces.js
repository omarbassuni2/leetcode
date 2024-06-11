/**
 * @param {number[][]} isConnected
 * @return {number}
 
 [[1,1,0],
  [1,1,0],
  [0,0,1]]
 */

var findCircleNum = function(isConnected) {
    let parent = new Array(isConnected.length).fill(0).map((_, i) => i);
    function find(x) {
        if (parent[x] !== x) {
            parent[x] = find(parent[x]); // Path compression
        }
        return parent[x];
    };
    
    function union(x, y) {
        const xParent = find(x);
        const yParent = find(y);
        if (xParent !== yParent) {
            parent[xParent] = yParent; // Union
        }
    };
    
    for (let i = 0; i < isConnected.length; i += 1) {
        for (let j = 0; j < isConnected[0].length; j += 1) {
            if (i !== j && !!isConnected[i][j]) {
                union(i, j);
            }
        }
    }
    parent = parent.map(find)
    return new Set(parent).size;
};