/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    const dp = new Array(n + 1).fill(0);
    let offset = 1;
    for(var i = 1; i < n + 1; i += 1){
        if(offset * 2 == i)     offset = i;
        dp[i] = 1 + dp[i - offset];
    }
    return dp;
};