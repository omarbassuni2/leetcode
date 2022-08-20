/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if(prices.length == 1)  return 0;
    let maxxProfit = 0;
    let referencePoint = 0, comparator = 1;
    while(comparator < prices.length){
        const currProfit = prices[comparator] - prices[referencePoint];
        if(currProfit > 0){
            maxxProfit = Math.max(maxxProfit, currProfit);
        }else   referencePoint = comparator;
        comparator += 1;
    }
    return maxxProfit;
};