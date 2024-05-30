/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSum = nums[0], currSum = 0;
    for(const num of nums) {
        if(currSum < 0)     currSum = 0;
        currSum += num;
        maxSum = Math.max(maxSum, currSum);
    }
    return maxSum;
};