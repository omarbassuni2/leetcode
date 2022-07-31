/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    if(nums.length == 1)    return [nums];
    const output = [];
    nums = nums.sort();
    dfs = function(currArr, remaining){
        if(currArr.length == nums.length){
            output.push(currArr.slice());
            return;
        }
        for(var i = 0; i < remaining.length; i += 1){
            currArr.push(remaining[i]);
            dfs(currArr, [...remaining.slice(0, i), ...remaining.slice(i + 1)]);
            currArr.pop();
            while(i < remaining.length && remaining[i] == remaining[i+ 1])    i += 1;
            dfs(currArr, remaining.slice(1));
        }
    }
    dfs([], nums);
    return output;
};