/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    if(k <= 1)  return 0;
    let left = 0, product = 1, counter = 0;
    for(var i = 0; i < nums.length; i+= 1){
        product *= nums[i];
        while(product >= k){
            product /= nums[left];
            left += 1;
        }
        counter += i - left + 1;
    }
    return counter;
};