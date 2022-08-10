/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    if(nums.length == 1)    return 0;
    const dp = new Array(nums.length).fill(Infinity);
    dp[nums.length - 1] = 0;     //dp[4] = 0
    dp[nums.length - 2] = 1;    //1 + dp[4] = 1 
    for(var i = nums.length - 3; i >= 0; i -= 1){
        if(nums[i] === 0)    continue;
        let currentVal = 1 + dp[i + 1];
        for(var j = 2; j <= nums[i] && i + j < nums.length; j += 1){
            currentVal = Math.min(currentVal, 1 + dp[i + j]); //dp[1]=Min( (1 + dp[2]), (1+dp[3]),(1+dp[4]) )we add the one because we account for the move
        }
        dp[i] = currentVal;
    }
    return dp[0];
};