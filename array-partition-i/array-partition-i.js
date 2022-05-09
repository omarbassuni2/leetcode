/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    nums = nums.sort(function(a, b){
        return a-b;
    });
    var i = 0;
    let maxNum = 0;
    while(i < nums.length - 1){
        maxNum += Math.min(nums[i], nums[i + 1]);
        i += 2;
    }
    return maxNum;
};