/**
 * @param {number[]} nums
 * @return {number}
 */
/*
    The idea is to keep 2 variables max, currSum. The currSum should be the max between currSum + currNum and currNum alone; applying sliding window method
    and max should be the max between max and currSum
*/
var maxSubArray = function(nums) {
    let max = -Infinity, currSum = 0;
    nums.forEach((currNum) => {
        currSum = Math.max(currSum + currNum, currNum);
        max = Math.max(max, currSum);
    });
    return max;
};