/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    // nums = [5,1,3] target = 5
    let left = 0, right = nums.length - 1;
    while(left <= right) {
        const mid = Math.floor((left + right) / 2);
        if(nums[mid] === target) return mid;
        if(nums[left] <= nums[mid]) {
            if(nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
            continue;
        } 
        if(nums[mid] < nums[right]) {
            if(nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
            continue;
        }
    }
    return -1;
};