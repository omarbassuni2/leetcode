/**
 * @param {number[]} nums
 * @return {number}
 */
/*
    Consider two positions dp[i - 1] and dp[i - 2]. The goal is to have our result in dp[nums.length - 1], so we check which is bigger, dp[i - 1] or dp[i - 2] + nums[i]
*/
var rob = function(nums) {
    if(nums.length <= 2)    return Math.max(...nums);
    const dp = new Array(nums.length).fill(0);
    dp[0] = nums[0], dp[1] = Math.max(nums[0], nums[1]);
    for(let i = 2; i < nums.length; i += 1) {
        dp[i] = Math.max(dp[i - 1], nums[i] + dp[i - 2]);
    }
    return dp[nums.length - 1];
};