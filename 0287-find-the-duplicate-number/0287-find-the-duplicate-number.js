/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    for(var i = 0; i < nums.length; i += 1){
        for(var j = i + 1; j < nums.length; j += 1){
            if(nums[i] == nums[j])      return nums[i];
        }
    }
};