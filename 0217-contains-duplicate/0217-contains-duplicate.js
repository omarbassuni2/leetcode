/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const newSet = new Set();
    for(var i = 0; i < nums.length; i += 1) {
        if(newSet.has(nums[i]))     return true;
        newSet.add(nums[i]);
    };
    return false;
};