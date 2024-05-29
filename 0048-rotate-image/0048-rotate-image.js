/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let left = 0, right = matrix.length - 1;
    while(left < right) {
        for(let i = 0; i < right - left; i += 1) { // i < right - left might be an issue
            const top = left, bottom = right;
            // We want to save temp top left for now and do for things
            const tempTopLeft = matrix[top][left + i]

            // top left = bottom left
            matrix[top][left + i] = matrix[bottom - i][left];
            
            // bottom left = bottom right
            matrix[bottom - i][left] = matrix[bottom][right - i];
            
            //  bottom right = top right
            matrix[bottom][right - i] = matrix[top + i][right];
            
            // top right = temp top left
            matrix[top + i][right] = tempTopLeft;
            
        }
        left += 1;
        right -= 1;
    }
};