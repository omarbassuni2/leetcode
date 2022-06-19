/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let l = 0, r = nums.length - 1;
    let mid = Math.floor((l + r) / 2);
    while(l <= r){
        if(nums[mid] == target)   return mid;
        else if(nums[mid] < target) l = mid + 1;
        else    r = mid - 1;
        mid = Math.floor((l + r) / 2);
    }
    return mid + 1;
};