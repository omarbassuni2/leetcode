/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    nums = nums.sort(function(a, b){return a-b;});
    for(var i = 0; i < nums.length; i += 1){
        if(nums[i] == nums[i - 1])  return true;
    }
    return false;
};