/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let left = 0, right = matrix[0].length - 1, low = 0, high = matrix.length - 1, targetRow; 
    let mid = Math.ceil((low + high) / 2);
    while(low <= high){
        if(matrix[mid][right] >= target && matrix[mid][left] <= target){
            targetRow = mid;
            break;
        }
        else if(matrix[mid][right] <= target){
            low = mid + 1;
        }else   high = mid - 1;
        mid = Math.ceil((high + low) / 2);
    }
    if(typeof(targetRow) !== 'number')  return false;
    mid = Math.ceil((left + right) / 2);
    while(left <= right){
        if(matrix[targetRow][mid] == target)    return true;
        else if(target >= matrix[targetRow][mid])  left = mid + 1;
        else    right = mid - 1;
        mid = Math.ceil((left + right) / 2);
    }
    return false;
};