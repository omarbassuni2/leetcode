/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let left = 0, right = matrix[0].length - 1, low = 0, high = matrix.length - 1, targetRow; 
    while(low <= high){
        const mid = Math.floor((low + high) / 2);
        if(matrix[mid][right] >= target && matrix[mid][left] <= target){
            targetRow = mid;
            break;
        }
        else if(matrix[mid][right] < target){
            low = mid + 1;
        } else   high = mid - 1;
    }
    if(isNaN(targetRow))  return false;
    while(left <= right){
        const mid = Math.floor((left + right) / 2);
        if(matrix[targetRow][mid] == target)    return true;
        else if(target > matrix[targetRow][mid])  left = mid + 1;
        else    right = mid - 1;
    }
    return false;
};