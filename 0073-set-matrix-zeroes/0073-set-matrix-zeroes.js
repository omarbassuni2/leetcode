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
    const queue = [], top = 0, left = 0, bottom = matrix.length - 1, right = matrix[0].length - 1;
    matrix.forEach((row, i) => {
        row.forEach((col, j) => {
            if(col === 0)   queue.push([i, j]);
        });
    });
    for(const cell of queue) {
        let iIndex = cell[0], jIndex = cell[1];
        // Go left to <= left
        for(let j = jIndex; j >= left; j -= 1)    matrix[iIndex][j] = 0;
        // Go right to >= right
        for(let j = jIndex; j <= right; j += 1)    matrix[iIndex][j] = 0;
        // Go bottom to >= bottom
        for(let i = iIndex; i <= bottom; i += 1)    matrix[i][jIndex] = 0;
        // Go top to <= top
        for(let i = iIndex; i >= top; i -= 1)    matrix[i][jIndex] = 0;
    }
};