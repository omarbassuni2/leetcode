/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if(nums.length === 1)   return nums[0] === target ? 0 : - 1;
    let left = 0, right = nums.length - 1;
    while(left <= right) {
        const mid = Math.floor((left + right) / 2);
        if(nums[mid] === target)    return mid;
        if(nums[mid] < target)      left = mid + 1;
        else                        right = mid - 1;
    }
    return -1;
};