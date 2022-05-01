/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const output = [];
    function backtracking(i, currCombination, total){
        if(total == target){
            output.push(currCombination.slice());
            return;
        }
        else if(i >= candidates.length || total > target) return;
        currCombination.push(candidates[i]);
        backtracking(i, currCombination, total + candidates[i]);
        currCombination.pop();
        backtracking(i + 1, currCombination, total);
    }
    backtracking(0, [], 0);
    return output;
};