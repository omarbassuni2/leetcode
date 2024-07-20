/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const map = {};
    nums.forEach((num) => {
        if(!(num in map))   map[num] = 0;
        map[num] += 1;
    });
    let max = [];
    Object.keys(map).forEach((key) => {
        if(map[key] > (nums.length / 2)) {
            max = map[key] > max ? [map[key], key] : max;
        }
    });
    return max[1];
};