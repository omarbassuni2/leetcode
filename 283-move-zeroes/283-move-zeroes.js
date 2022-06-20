/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let writepointer = 0;
    for(var i = 0; i < nums.length; i += 1){
        const value = nums[i];
        nums[i] = 0;
        if(value != 0){
            nums[writepointer] = value;
            writepointer += 1;
        }
    }
};