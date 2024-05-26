/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    if(nums.length === 1)   return nums[0];
    let left = 0, right = nums.length - 1, output = Infinity;
    while(left <= right) {
        const mid = Math.floor((left + right) / 2);
        if(nums[left] <= nums[mid]) { // left is sorted
            output = Math.min(nums[left], output);
            left = mid + 1;
        } else {
            output = Math.min(nums[mid], output);
            right = mid - 1;
        }
    }
    return output;
};