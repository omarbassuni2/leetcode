/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const output = [];
    var backtrack = function(start, currComb){
        if(currComb.length == k){
            output.push(currComb.slice());
            return;
        }
        for(var i = start; i <= n; i += 1){
            currComb.push(i);
            backtrack(i + 1, currComb);
            currComb.pop();
        }
    }
    backtrack(1, []);
    return output;
};