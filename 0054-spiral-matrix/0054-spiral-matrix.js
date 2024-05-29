/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let top = 0, bottom = matrix.length - 1;
    let left = 0, right = matrix[0].length - 1;
    const output = [];
    while(left <= right && top <= bottom) {
        for(let i = left; i <= right; i += 1)    output.push(matrix[top][i]);
        top += 1;
        for(let i = top; i <= bottom; i += 1)    output.push(matrix[i][right]);
        right -= 1;
        if(output.length === matrix.length * matrix[0].length)  break;  // to handle 1 column matrix and 1 row matrix
        for(let i = right; i >= left ; i -= 1)     output.push(matrix[bottom][i]);
        bottom -= 1;
        for(let i = bottom; i >=  top; i -= 1)  output.push(matrix[i][left]);
        left += 1;
    }
    return output
};