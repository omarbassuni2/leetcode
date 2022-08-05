/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let table = new Array(amount + 1).fill(-1)
    table[0] = 0
    
    for(let i = 0; i < amount; i += 1) {
        if(table[i] !== -1) {
            for(let coin of coins) {
                let tablePos = table[i + coin]
                if(i + coin <= amount && (tablePos === -1 || tablePos > table[i] + 1)) {
                    table[i + coin] = table[i] + 1
                }
            }
        }
    }
    
    return table[amount]
};