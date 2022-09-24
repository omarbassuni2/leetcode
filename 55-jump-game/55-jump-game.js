/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    if(nums.length == 1)    return true;
    const dp = new Array(nums.length).fill(false);
    dp[nums.length - 1] = true;
    for(var i = nums.length - 2; i >= 0; i -= 1){
        if(nums[i] == 0)    continue;
        for(var j = 1; j <= nums[i]; j += 1){
            dp[i] = dp[i] || dp[i + j];
            if(dp[i])   break;
        }
    }
    return dp[0];
};