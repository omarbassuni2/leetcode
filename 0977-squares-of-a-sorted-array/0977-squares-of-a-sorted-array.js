/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    const output = [];
    let left = 0, right = nums.length - 1;
    while(left <= right) {
        const leftSquare = Math.pow(nums[left], 2), rightSquare = Math.pow(nums[right], 2);
        if(rightSquare >= leftSquare) {
            output.unshift(rightSquare);
            right -= 1;
        } else {
            output.unshift(leftSquare);
            left += 1;
        }
    }
    return output;
};