/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    const output = [];
    let left = 0, right = nums.length - 1;
    while(left <= right) {
        const absLeft = Math.abs(nums[left]), absRight = Math.abs(nums[right]);
        if(absLeft >= absRight) {
            output.unshift(Math.pow(nums[left], 2))
            left += 1
        } else {
            output.unshift(Math.pow(nums[right], 2))
            right -= 1
        }
    }
    return output;
};