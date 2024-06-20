/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    if(k === 0) return false;
    let left = 0;
    const set = new Set();
    for(let right = 0; right < nums.length; right += 1) {
        if(set.has(nums[right]))    return true;
        set.add(nums[right])
        if(right - left === k)  {
            set.delete(nums[left]);
            left += 1;
        }
    }
    return false;
};