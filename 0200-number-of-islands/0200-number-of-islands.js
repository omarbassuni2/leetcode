/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const visited =  new Set();
    let numOfIslands = 0;
    function dfs(i, j) {
        if(i < 0 || j < 0 || i >= grid.length || 
           j >= grid[0].length || visited.has([i,j].join(",")) || grid[i][j] === '0') return;
        visited.add([i,j].join(",")) 
        dfs(i - 1, j);
        dfs(i + 1, j);
        dfs(i, j - 1);
        dfs(i, j + 1);
    }
    for(let i = 0; i < grid.length; i += 1) {
        for(let j = 0; j < grid[0].length; j += 1) {
            if(grid[i][j] === '1' && !visited.has([i,j].join(",")))  {
                dfs(i,j);
                numOfIslands += 1;
            }
        }
    }
    return numOfIslands;
};