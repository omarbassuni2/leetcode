/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let index = nums[0] <= target ? 0 : nums.length - 1;
    let iterOp = nums[0] <= target ? 1 : -1;
    const bound = nums[0] <= target ? nums.length : -1;
    while(index != bound){
        console.log(nums[index]);
        if(nums[index] == target)   return index;
        index += iterOp;
    }
    return -1
};