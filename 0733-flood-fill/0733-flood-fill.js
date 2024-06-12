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
        if(i < 0 || j < 0 || i >= image.length || j >= image[0].length ||
           visited.has([i,j].join("")) || prevColor !== image[i][j])  return;
        visited.add([i,j].join(""));
        const temp = image[i][j];
        image[i][j] = color;
        dfs(i - 1, j, temp);
        dfs(i + 1, j, temp);
        dfs(i, j - 1, temp);
        dfs(i, j + 1, temp);
    }
    dfs(sr, sc, image[sr][sc]);
    return image;
};