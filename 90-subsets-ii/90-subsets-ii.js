/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    const output = [];
    const subset = [];
    nums = nums.sort();
    const dfs = function(i){
        if(i >= nums.length){
            output.push(subset.slice(0));
            return;
        }
        //decide to add a new element
        subset.push(nums[i]);
        dfs(i + 1);
        // decide not to add a new element
        subset.pop();
        while(i < nums.length && nums[i] == nums[i+1])  i += 1;
        dfs(i + 1);
    }
    dfs(0);
    return output;
};