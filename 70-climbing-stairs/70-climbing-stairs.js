/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const dp = new Array(n).fill(0);
    dp[0] = 1, dp[1] = 2;
    for(var i = 2; i < n; i += 1){
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n - 1];
};