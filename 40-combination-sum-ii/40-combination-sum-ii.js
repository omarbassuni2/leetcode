/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates = candidates.sort();
    const output = [];
    function backtracking(i , current, summation){
        if(summation == target){
            output.push(current.slice());
            return;
        }
        if(summation > target || i > candidates.length)     return;
        current.push(candidates[i]);
        backtracking(i + 1, current, summation + candidates[i]);
        current.pop();
        while(i < candidates.length && candidates[i] == candidates[i + 1])  i += 1;
        backtracking(i + 1, current, summation);
    }
    backtracking(0, [], 0);
    return output;
};