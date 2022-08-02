/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    if(nums.length == 0)    return true;
    let memoization = new Array(nums.length).fill(false);
    memoization[0] = true;
    for(var i = 0; i < nums.length; i += 1){
        if(memoization[i]){
            for(var j = 0; j <= nums[i]; j += 1){
                memoization[i + j] = i + j <= nums.length - 1 ? true : false;
            }
        }
        if(memoization[nums.length - 1])    return true;
    }
    return false;
};