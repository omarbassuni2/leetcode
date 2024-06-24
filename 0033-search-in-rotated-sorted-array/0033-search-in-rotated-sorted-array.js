/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if(nums.length === 1)   nums[0] === target ?  0 : -1;
    let left = 0, right = nums.length - 1;
    while(left <= right) {
        const mid = Math.floor((right + left) / 2);
        if(nums[mid] === target) return mid;
        // If left is less than right, then left is sorted
        if(nums[left] <= nums[mid]) {
            if(nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            }
            else {
                left = mid + 1;
            }
        }   else {
            if(nums[right] >= target && target > nums[mid]) {
               left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    return -1;
};