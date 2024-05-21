/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = {};
    nums.forEach((n, i) => {
        if(map[n])  map[n].push(i);
        else map[n] = [i];
    });
    for(let i = 0; i < nums.length; i += 1) {
        const temp = target - nums[i];
        if(map[temp]) {
            const secondIndex = map[temp][map[temp].length - 1];
            if(i !== secondIndex)    return [i, secondIndex];
        }
    }
};