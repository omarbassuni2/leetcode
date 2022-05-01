/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSum = -Infinity;
    let curr = 0;
    for(var i = 0; i < nums.length; i += 1){
        curr = Math.max(curr + nums[i], nums[i]);
        maxSum = Math.max(maxSum, curr);
    }
    return maxSum;
};