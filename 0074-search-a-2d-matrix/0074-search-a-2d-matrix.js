/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    // Search the first column and get the desired row
    let top = 0, bottom = matrix.length - 1;
    while(top <= bottom) {
        const mid = Math.floor((top + bottom) / 2);
        if(matrix[mid][0] === target)   return true;
        else if(matrix[mid][0] < target) {
            top = mid + 1;
        } else {
            bottom = mid - 1;
        }
    }
    if (bottom < 0 || bottom >= matrix.length || matrix[bottom][0] > target) return false;
    // Search for the value
    let left = 0, right = matrix[bottom].length - 1;
    while(left <= right) {
        const mid = Math.floor((left + right ) / 2);
        if(matrix[bottom][mid] === target) return true;
        if(matrix[bottom][mid] < target)   left = mid + 1;
        else                            right = mid - 1;
    }
    return false;
};