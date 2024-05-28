/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    const dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;
    for(let i = 1; i <= amount; i += 1) {
        for(const c of coins) {
           if(i - c >= 0)    dp[i] = Math.min(dp[i], 1 + dp[i - c]);
        }
    }
    return dp[amount] !== Infinity ? dp[amount] : -1;
};