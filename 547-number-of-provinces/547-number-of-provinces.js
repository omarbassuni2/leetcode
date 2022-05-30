/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    let visited = new Set, provs = 0;
    for(let i = 0; i < isConnected.length; i++) {
        if(!(visited.has(i))) {
           provs++;
           DFS(isConnected, i, visited);
        }
    }
    return provs;
};

const DFS = (isConnected, i, visited) => {
    visited.add(i);
    for(let j = 1; j < isConnected.length; j++) {
        if(isConnected[i][j] && !(visited.has(j))) {
            DFS(isConnected, j, visited);
        }
    }
}