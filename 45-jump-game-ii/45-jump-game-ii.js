/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    const memoization = new Array(nums.length).fill(Infinity);
    memoization[nums.length - 1] = 0;
    for(var i = nums.length - 2; i >= 0 ; i -= 1){
        for(var jump = 1; jump <= nums[i] && i + jump < nums.length; jump += 1){
            memoization[i] = Math.min(memoization[i], memoization[i + jump] + 1);
        }
    }
    return memoization[0];
};