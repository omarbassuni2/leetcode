/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let temp1 = Infinity, temp2 = Infinity;
    for(var i = 0; i < nums.length; i += 1){
        if(nums[i] <= temp1)    temp1 = nums[i];
        else if(nums[i] <= temp2)   temp2 = nums[i];
        else                    return true;
    }
    return false;
};