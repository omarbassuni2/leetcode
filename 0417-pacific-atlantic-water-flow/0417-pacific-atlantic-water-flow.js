/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
/*
[
[1,2,2,3,5],
[3,2,3,4,4],
[2,4,5,3,1],
[6,7,1,4,5],
[5,1,1,2,4]
]
*/
var pacificAtlantic = function(heights) {
    const pac = new Set(), atl = new Set();
    function dfs(i, j, visited, prevHeight) {
        if(i < 0 || i >= heights.length || j < 0 || j >= heights[0].length || visited.has([i,j].toString()) ||
          heights[i][j] < prevHeight) {
            return;
        }
        visited.add([i, j].toString());
        dfs(i + 1, j, visited, heights[i][j]);
        dfs(i - 1, j, visited, heights[i][j]);
        dfs(i, j + 1, visited, heights[i][j]);
        dfs(i, j - 1, visited, heights[i][j]);
    }
    for(let c = 0; c < heights[0].length; c += 1) {
        dfs(0, c, pac, heights[0][c]);  // first row
        dfs(heights.length - 1, c, atl, heights[heights.length - 1][c]);  // last row
    }
    for(let r = 0; r < heights.length; r += 1) {
        dfs(r, 0, pac, heights[r][0]);  // first col
        dfs(r, heights[0].length - 1, atl, heights[r][heights[0].length - 1]);  // last col
    }
    const output = [];
    atl.forEach((key) => {
        if(pac.has(key))    output.push(key.split(","));
    })
    return output;
};