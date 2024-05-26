/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    if(nums.length === 1)   return nums[0];
    let max = Math.max(...nums), curMax = 1, curMin = 1;
    for(let i = 0; i < nums.length; i += 1) {
        if(nums[i] === 0)   {
            curMax = 1, curMin = 1;
            continue;
        }
        const tmp = curMax
        curMax = Math.max(nums[i], nums[i] * curMax, nums[i] * curMin);
        curMin = Math.min(nums[i], nums[i] * tmp, nums[i] * curMin);
        max = Math.max(max, curMax);
    }
    return max;
};