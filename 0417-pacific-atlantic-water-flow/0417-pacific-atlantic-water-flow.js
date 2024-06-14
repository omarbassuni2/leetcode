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
    /* 
    The idea is to use dfs on each cell that touches an ocean,
    use a different visited set for each ocean. And return their intersection
    */
    const pac = new Set(), atl = new Set();
    function dfs(i, j, prevHeight, visited) {
        if(i < 0 || j < 0 || i >= heights.length || j >= heights[0].length
           || visited.has([i,j].join(",")) || heights[i][j] < prevHeight)   return;
        visited.add([i,j].join(","));
        dfs(i - 1, j, heights[i][j], visited);
        dfs(i + 1, j, heights[i][j], visited);
        dfs(i, j - 1, heights[i][j], visited);
        dfs(i, j + 1, heights[i][j], visited);
    } 
    // Iterate over rows, use first col and last col
    for(let r = 0; r < heights.length; r  += 1) {
        dfs(r, 0, heights[r][0], pac);
        dfs(r, heights[0].length - 1, heights[r][heights[0].length - 1], atl);
    }
    
    // Iterate over cols, use first row and last row
    for(let c = 0; c < heights[0].length; c  += 1) {
        dfs(0, c, heights[0][c], pac);
        dfs(heights.length - 1, c, heights[heights.length - 1][c], atl);
    }
    // Check intersection and return it as output
    const output = [];
    pac.forEach((key) => {
        if(atl.has(key))    output.push(key.split(","))
    });
    return output;
};