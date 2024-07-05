/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let left = 0;
    for(let i = 0; i < nums.length; i += 1) {
        const temp = nums[i];
        nums[i] = 0
        if(temp !== 0)  {
            nums[left] = temp;
            left += 1;
        }
    };
    return nums;
};