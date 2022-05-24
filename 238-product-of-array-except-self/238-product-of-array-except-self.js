/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let sumOfNums = 0;
    let leftMultiplication = 1;
    let output = []; 
    for(var i = 0; i < nums.length; i += 1){
        output[i] = leftMultiplication;
        leftMultiplication *= nums[i];
    }
    let rightMultiplication = 1;
    let rightArr = []
    for(var i = nums.length - 1; i >= 0; i -= 1){
        rightArr[i] = rightMultiplication;
        rightMultiplication *= nums[i];
        output[i] *= rightArr[i];
    }
    return output;
};