/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const set = new Set([...nums.map((_, index) => index), nums.length]);
    nums.forEach((n) => {
        if(set.has(n))  set.delete(n);
    });
    return set.values().next().value;
};