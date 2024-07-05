/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    if (amount === 0) return 0;
    const memo = {};

    function recursion(remainder) {
        if (remainder < 0) return -1;
        if (remainder === 0) return 0;
        if (remainder in memo) return memo[remainder];

        let localMin = Infinity;
        for (const coin of coins) {
            const res = recursion(remainder - coin);
            if (res !== -1) {
                localMin = Math.min(localMin, res + 1);
            }
        }

        memo[remainder] = (localMin === Infinity) ? -1 : localMin;
        return memo[remainder];
    }

    return recursion(amount);
};