/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let output = nums.length;
    for(var i = 0; i < nums.length; i += 1){
        output += i - nums[i];
    }
    return output;
};