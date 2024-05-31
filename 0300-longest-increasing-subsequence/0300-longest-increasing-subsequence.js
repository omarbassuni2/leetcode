/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    const dp = new Array(nums.length).fill(1)
    for(var i = nums.length - 2; i >= 0; i -= 1){
        for(var j = i + 1; j < nums.length; j += 1){
            if(nums[i] < nums[j])   dp[i] = Math.max(1, 1 + dp[j], dp[i]);
        }
    }
    return Math.max(...dp);
};