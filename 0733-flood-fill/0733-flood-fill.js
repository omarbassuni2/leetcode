/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    const visited = new Set();
    function dfs(i, j, prevColor) {
        if(i < 0 || j < 0 || i >= image.length || j >= image[0].length || visited.has([i,j].toString()) || image[i][j] !== prevColor)    return;
        visited.add([i,j].toString());
        image[i][j] = color;
        dfs(i + 1, j, prevColor);
        dfs(i - 1, j, prevColor);
        dfs(i, j + 1, prevColor);
        dfs(i, j - 1, prevColor);
    }
    dfs(sr, sc, image[sr][sc]);
    return image;
};