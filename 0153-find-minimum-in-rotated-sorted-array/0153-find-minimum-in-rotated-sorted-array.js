/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    if(nums.length === 1)   nums[0];
    let left = 0, right = nums.length - 1, min = Infinity;
    while(left <= right) {
        const mid = Math.floor((right + left) / 2);
        // Left is sorted
        if(nums[left] <= nums[mid]) {
            min = Math.min(min, nums[left]);
            left = mid + 1
        }
        // Right is sorted
        else {
            min = Math.min(min, nums[mid]);
            right = mid - 1;
        }
    }
    return min;
};