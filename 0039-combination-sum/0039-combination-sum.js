/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const output = [], memo = {}, set = new Set();
    function recursion(currArr, currTarget) {
        if(currTarget === 0) {
            const c = currArr.sort();
            if(!set.has(c.toString())) {
                set.add(c.toString());
                return output.push(c);
            }
        }
        for(const num of candidates) {
            if(currTarget - num >= 0) {
                recursion([...currArr, num], currTarget - num);
            }
        }
    }
    recursion([], target)
    return output;
};