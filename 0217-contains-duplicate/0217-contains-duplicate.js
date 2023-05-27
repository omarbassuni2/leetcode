/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const numSet = new Set();
    for(let i =0; i < nums.length; i += 1) {
        if (numSet.has(nums[i])) return true;
        else   numSet.add(nums[i]);
    }
    return false;
};