/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let output = nums.length;
    nums.forEach((n, index) => {
        output += index - n;
    })
    return output;
};