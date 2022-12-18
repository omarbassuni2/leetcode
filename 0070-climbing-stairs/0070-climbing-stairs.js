/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n == 1 || n == 2)    return n;
    const output = [1, 2];
    for(var i = 2; i < n; i += 1){
        output.push(output[i-1] + output[i-2])
    }
    return output.pop();
};