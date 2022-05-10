/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    var startIndex = 0;
    var maxSum = 0;
    while(nums[startIndex] != 1 && startIndex < nums.length){
        startIndex += 1;
    }
    for(let i = startIndex; i < nums.length; i += 1){
        if(nums[i] != 1 || (nums[i] == 1 && i == nums.length - 1) ){
            let addition = (nums[i] != 1) ? 0 : 1;
            const sum = i - startIndex + addition;
            maxSum = (sum > maxSum) ? sum : maxSum;
            startIndex = i;
            while(nums[startIndex] != 1 && startIndex < nums.length){
                startIndex += 1;
            }
            i = startIndex;
        }
    }
    return maxSum;
};