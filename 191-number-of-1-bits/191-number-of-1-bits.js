/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let output = 0;
    while(n > 0){
        const reminder = n % 2;     //our input is bits, we mod it and we our reminder is either 1 or a 0
        output += reminder;         //we add the reminder to count the ones
        n = n >>> 1;                 //we shift the number we counted last
    }
    return output;
};