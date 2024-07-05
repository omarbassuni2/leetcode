/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

/*
[[1,1,1],   
 [1,0,1],
 [1,1,1]]   
 
 [[1,0,1],
 [0,0,0],
 [1,0,1]]
 
[[1,0,1]]   [[0,0,0]]
[[1], [0], [1]]
[[0]], [[1]]
*/
var setZeroes = function(matrix) {
    const left = 0, top = 0, right = matrix.length, bottom = matrix[0].length;
    const zeros = [];
    matrix.forEach((row, i) => {
        row.forEach((value, j) => {
            value === 0 && (zeros.push([i, j]));
        })
    })
    for(const [i, j] of zeros) {
        // rows
        for(let k = i; k < right; k += 1)   matrix[k][j] = 0;
        for(let k = i; k >= 0; k -= 1)      matrix[k][j] = 0;
        
        // cols
        for(let k = j; k < bottom; k += 1)   matrix[i][k] = 0;
        for(let k = j; k >= 0; k -= 1)      matrix[i][k] = 0;
    }
};