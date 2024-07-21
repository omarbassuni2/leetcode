/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    const output = [];
    let left = 0, right = nums.length - 1;
    while(left <= right) {
        const leftElement = Math.pow(nums[left], 2), rightElement = Math.pow(nums[right], 2);
        if(leftElement >= rightElement) {
            output.unshift(leftElement);
            left += 1;
        } else {
            output.unshift(rightElement);
            right -= 1;
        }
        
    }
    return output;
};