/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const output = [];
    const prefix = new Array(nums.length + 1).fill(1);
    const postfix = new Array(nums.length + 1).fill(1);
    for(var i = 0, j = 1;i < nums.length; i+= 1, j += 1){
        prefix[j] = prefix[j - 1] * nums[i];
    }
    for(var i = nums.length - 1, j = postfix.length - 2; i >= 0; i-= 1, j -= 1){
        postfix[j] = postfix[j + 1] * nums[i];
    }
    for(var i = 0; i < prefix.length - 1; i += 1){
        output[i] = prefix[i] * postfix[i + 1];
    }
    return output;
};