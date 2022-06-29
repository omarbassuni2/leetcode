/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const result = [];
    if(nums.length == 1)    return [nums.slice()];
    for(var i = 0; i < nums.length; i += 1){
        const n = nums.shift();
        let perms = permute(nums);
        for(const perm of perms){
            perm.push(n);
        }
        result.push.apply(result, perms);
        nums.push(n);
    }
    return result;
};