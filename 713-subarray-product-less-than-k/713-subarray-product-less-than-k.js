/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    let multiplier = 1, counter = 0;
    for(var i = 0; i < nums.length; i += 1){
        for(var j = i; j < nums.length; j += 1){
            multiplier *= nums[j];
            if(multiplier < k){
                counter += 1;
            }
        }
        multiplier = 1;
    }
    return counter;
};