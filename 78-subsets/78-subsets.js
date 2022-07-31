/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    if(nums.length == 1)    [[], nums];
    const output = [];
    const subset = [];
    const dfs = function(i){
        if(nums.length <= i){
            output.push(subset.slice());
            return;
        }
        //decide to add the number to subset
        subset.push(nums[i]);
        dfs(i + 1);
        
        //don't add this number to the subset
        subset.pop();
        dfs(i + 1);
    }
    dfs(0);
    return output;
};