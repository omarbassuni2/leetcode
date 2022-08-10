/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    if(nums.length == 1)    return true;
    const output = new Array(nums.length).fill(false);
    output[nums.length - 1] = true;
    for(var i =  nums.length - 2; i >= 0; i -= 1){
        if(nums[i] == 0)    continue;
        for(var j = 1; j <= nums[i]; j += 1){
            output[i] = output[i] || output[i + j];  //dp[1] = dp[2] || dp[3] || dp[4]
            if(output[i])   break;
        }
    }
    return output[0]
};