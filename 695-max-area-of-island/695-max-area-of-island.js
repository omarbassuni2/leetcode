/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let currArea = 0;
    var dfs = function(row, col, flag){
        if(row >= grid.length || col >= grid[0].length ||
           row < 0 || col < 0 ||
           visitedSet.has([row,col].toString()) || grid[row][col] == 0) return;
        visitedSet.add([row, col].toString())
        currArea += 1;
        maxArea = Math.max(maxArea, currArea);
        dfs(row + 1, col, flag);
        dfs(row, col + 1, flag);
        dfs(row, col - 1, flag);
        dfs(row - 1, col, flag);
    }
    const visitedSet = new Set();
    let maxArea = 0;
    for(var i = 0; i < grid.length; i += 1){
        for(var j = 0; j < grid[0].length; j += 1){
            if(grid[i][j] == 1 && !visitedSet.has([i,j].toString())){
                let flag = ((i == 3) && (j == 8)) ? true : false;
                dfs(i, j, flag);
                currArea = 0;
            }
        }
    }
    return maxArea;
};