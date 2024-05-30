/**
 * @param {number[]} nums
 * @return {boolean}
 */
/*
 0,1,2,3,4,  5
[2,3,1,1,4] true

 0,1,2,3,4,  5
[3,2,1,0,4] true

 0,1,2,3,4,  5
[3,2,1,0,0] true

[1]
[0]
*/
var canJump = function(nums) {
    const dp = new Array(nums.length).fill(false);
    dp[nums.length - 1] = true;
    for(let i = nums.length - 2; i >= 0; i -= 1) {
        if(nums[i] === 0)   continue;
        for(let j = i + 1; j <= i + nums[i]; j += 1) {
            dp[i] ||= dp[j];
            if(dp[i])   break;
        }
    }
    return dp[0];
};