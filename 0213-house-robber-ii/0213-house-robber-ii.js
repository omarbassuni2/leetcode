/**
 * @param {number[]} nums
 * @return {number}
 */
/*
https://leetcode.com/problems/house-robber-ii/discuss/1234674/Javascript-or-DP-or-Time%3A-O(n)-Space%3A-O(1)
*/
var rob = function(nums) {
    if(nums.length <= 3)    return Math.max(...nums);
    let max = 0;
    let dp = new Array(nums.length).fill(0);
    dp[0] = nums[0], dp[1] = Math.max(nums[0], nums[1]);
    for(let i = 2; i < nums.length - 1; i += 1) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
        max = Math.max(dp[i], max);
    }
    dp[1] = nums[1], dp[2] = Math.max(nums[1], nums[2]);
    for(let i = 3; i < nums.length; i += 1) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
        max = Math.max(dp[i], max);
    }
    return max;
};