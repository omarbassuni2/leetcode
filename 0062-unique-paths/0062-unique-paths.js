/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const dp = new Array(m + 1).fill(0).map((row) => new Array(n + 1).fill(0));
    dp[m - 1][n - 1] = 1;
    for(let i = m - 1; i >=0; i -= 1) {
        for(let j = n - 1; j >= 0; j -= 1) {
            if(i === m - 1 && j === n - 1) continue;
            dp[i][j] = dp[i + 1][j]  + dp[i][j + 1];
        }
    }
    return dp[0][0];
};