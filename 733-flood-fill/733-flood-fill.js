/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var dfs = function(image, sr, sc, color, prevColor){
    if( sr >= image.length || sc >= image[0].length ||  sr < 0 ||
       sc < 0 || image[sr][sc] == color || image[sr][sc] != prevColor)  return;
    image[sr][sc] = color;
    dfs(image, sr + 1, sc, color, prevColor);
    dfs(image, sr - 1, sc, color, prevColor);
    dfs(image, sr, sc + 1, color, prevColor);
    dfs(image, sr, sc - 1, color, prevColor);
}
var floodFill = function(image, sr, sc, color) {
    if(image[sr][sc] == color)   return image;
    let prevColor = image[sr][sc];
    dfs(image, sr, sc, color, prevColor);
    return image;
};