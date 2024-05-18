/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let output = 0;
    for(let i = 0 ;i < 32; i += 1) {
        output <<= 1; // To shift by the bits one to the left
        output |= n & 1; // To get the value of the most right bit of n, and we OR it with the right most of output to get                          // the new result
        n >>>= 1;         // discard the most right bit
    }
    return output >>> 0; // to convert it to unsigned
};