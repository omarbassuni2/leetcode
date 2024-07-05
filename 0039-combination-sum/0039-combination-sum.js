/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const output = [];
    function backtrack(path, index, sum) {
        if(sum === target) {
            output.push(path.slice());
            return;
        }
        for(let i = index; i < candidates.length; i += 1) {
            if(sum + candidates[i] <= target) backtrack([...path, candidates[i]], i, sum + candidates[i]);
        }
    }
    backtrack([], 0, 0)
    return output;
};