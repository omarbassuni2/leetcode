/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const numMap = {};
    nums.forEach((num, i) => { numMap[num] ? numMap[num].push(i) : numMap[num] = [i] });
    for (let i = 0; i < nums.length; i += 1) {
        const remainder = target - nums[i];
        if (numMap[remainder]) {
            if (remainder !== nums[i])  return [i, numMap[remainder][0]];
            else if (remainder === nums[i] && numMap[remainder].length > 1)  return numMap[remainder].slice(0, 2)
            
        }
    };
};