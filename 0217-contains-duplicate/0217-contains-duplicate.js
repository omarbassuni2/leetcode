/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    if(nums.length === 1)   return false;
    const set = new Set();
    for(const n of nums) {
        if(!set.has(n)) set.add(n);
        else    return true;
    }
    return false;
};