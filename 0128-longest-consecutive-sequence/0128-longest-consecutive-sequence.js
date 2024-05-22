/**
 * @param {number[]} nums
 * @return {number}
 */

// https://leetcode.com/problems/longest-consecutive-sequence/discuss/139940/Simple-JavaScript-O(n)-solution
var longestConsecutive = function(nums) {
    const map = {};
    let max = 0;
    for(let i = 0; i < nums.length; i += 1) {
        if(map[nums[i]])    continue;
        const l = map[nums[i] - 1] || 0, r = map[nums[i] + 1] || 0 
        map[nums[i]] = l + r + 1;
        if(map[nums[i] - l])  map[nums[i] - l] = map[nums[i]];
        if(map[nums[i] + r])  map[nums[i] + r] = map[nums[i]];
        max = Math.max(max, map[nums[i]]);
    }
    return max;
};