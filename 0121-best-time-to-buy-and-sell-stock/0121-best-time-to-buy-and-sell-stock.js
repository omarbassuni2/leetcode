/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if(prices.length === 1) return 0;
    let max = 0, left = 0, right = 0;
    while(right < prices.length) {
        if(prices[right] < prices[left]) {
            left = right
        } else {
            max = Math.max(max, prices[right] - prices[left])
        }
        right += 1;
    }
    return max;
};