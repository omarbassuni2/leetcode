/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    if(n === 0) return [0];
    const output = new Array(n + 1).fill(0);
    output[1] = 1;
    for(let i = 2; i <= n; i += 1) {
        if(i % 2 === 0) output[i] = output[Math.floor(i / 2)];
        else            output[i] = output[Math.floor(i / 2)] + 1;
    }
    return output;
};