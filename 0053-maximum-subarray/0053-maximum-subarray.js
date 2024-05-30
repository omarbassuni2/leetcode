/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSum = nums[0], currSum = 0;
    nums.forEach((n) => {
        currSum = Math.max(n + currSum, n);
        maxSum = Math.max(maxSum, currSum);
    });
    return maxSum;
};