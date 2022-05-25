/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let visitedNodes = new Set();
    let islands = 0;
    for(var i = 0; i < grid.length; i += 1){
        for(var j = 0; j < grid[0].length; j += 1){
            if(grid[i][j] == '1' && !visitedNodes.has(`${i}, ${j}`)){
                breadthFirstSearch(i, j);
                islands += 1;
            }
        }
    }
    function breadthFirstSearch(r, c){
        const queueOfNodes = [[r, c]];
        visitedNodes.add(`${r}, ${c}`);
        while(queueOfNodes.length != 0){
            const poppedNode = queueOfNodes.shift();
            let row = poppedNode[0];
            let col = poppedNode[1];
            const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
            directions.forEach((direction) => {
                r = row + direction[0];
                c = col + direction[1];
                if(0 <= r && r < grid.length && 0 <= c && c < grid[0].length && grid[r][c] == '1' && !visitedNodes.has(`${r}, ${c}`)){
                    queueOfNodes.push([r, c]);
                    visitedNodes.add(`${r}, ${c}`);
                }
            })
        }
    }
    return islands;
};