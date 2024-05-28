/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const output = [];
    function dfs(i, currArr, remainder) {
        if(remainder === 0) {
            output.push(currArr.slice());
            return;
        } else if(i >= candidates.length || remainder < 0) {
            return;
        }
        dfs(i, [...currArr, candidates[i]], remainder - candidates[i]);
        dfs(i + 1, currArr, remainder);
    }
    dfs(0, [], target);
    return output;
};