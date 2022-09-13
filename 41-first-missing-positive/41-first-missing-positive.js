/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    for(var i = 0; i < nums.length; i += 1){
        if(nums[i] < 0) nums[i] = 0;
    }
    for(var i = 0; i < nums.length; i += 1){
        const index = Math.abs(nums[i]) - 1;
        if(0 <= index && index < nums.length){
            if(nums[index] >  0)    nums[index] *= -1;
            if(nums[index] == 0)    nums[index] = nums.length * -1
        }
    }
    for(var i = 0; i < nums.length; i += 1){
        if(nums[i] >= 0)     return i + 1;
    }
    return nums.length + 1;
};