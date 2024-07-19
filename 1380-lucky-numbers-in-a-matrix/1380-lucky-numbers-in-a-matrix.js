/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers  = function(matrix) {
    const rows = new Set(), output = [];
    for(let i = 0; i < matrix.length; i += 1) {
        rows.add(Math.min(...matrix[i]));
    }
    for(let i = 0; i < matrix[0].length; i += 1) {
        let maxCol = -Infinity;
        for(let j = 0; j < matrix.length; j += 1) {
            maxCol = Math.max(maxCol, matrix[j][i]);
        }
        rows.has(maxCol) && (output.push(maxCol));
    }
    return output;
};