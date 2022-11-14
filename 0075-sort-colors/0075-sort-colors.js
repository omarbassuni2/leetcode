/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    const pivotVal = 1;
    let pivotIndex = 0;
    for(var i = 0; i < nums.length; i += 1) {
       if(nums[i] < pivotVal){
           nums.splice(i, 1);
           nums.unshift(0);
           pivotIndex += 1;
       }else if(nums[i] == pivotVal){
           nums.splice(i, 1);
           nums.splice(pivotIndex, 0, 1); // insert at index, 0 means dont delete, 1 is insert value
       }
    };
    return nums;
};