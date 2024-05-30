/**
 * @param {character[][]} grid
 * @return {number}
 */
/*
Input: grid = [["1"]]
Input: grid = [["0"]]
Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Input: grid = [
  ["1","0","0","1","0"],
  ["0","0","0","0","0"],
  ["0","1","0","0","0"],
  ["0","0","0","0","0"]
]

[
["1","1","1"],
["0","1","0"],
["1","1","1"]]
*/
var numIslands = function(grid) {
    const visited = new Set();
    let counter = 0;
    function dfs(i, j) {
        visited.add([i, j].toString());
        for(const [ii, jj] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
            const r = i + ii, c = j + jj;
            if (!(r < 0 || c < 0 || r >= grid.length || c >= grid[0].length || visited.has([r, c].toString()))) {
                    if(grid[r][c] === '1')  dfs(r, c);
            }
        }
        
    }
    for(let i = 0; i < grid.length; i += 1) {
        for(let j = 0; j < grid[0].length; j += 1) {
            if(grid[i][j] === '1' && !visited.has([i, j].toString())) {
                dfs(i, j);
                counter += 1;
            }
        }
    }
    return counter;
};