/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    if(n === 1)     return 1;
    let output = 0;
    //our input is bits, we mod it and we our reminder is either 1 or a 0
    //we add the reminder to count the ones and we shift the number we counted last
    while(n > 0) {
        output += n % 2;
        n >>>= 1;
    }
    return output;
};