/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    const dp = new Array(cost.length + 1).fill(0);
    for(let i = cost.length - 1; i >= 0; i -= 1) {
        dp[i] = cost[i] + Math.min(dp[i + 1] || 0, dp[i + 2] || 0);
    }
    return Math.min(dp[0], dp[1]);
}