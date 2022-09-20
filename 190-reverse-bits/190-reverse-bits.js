/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let output = 0;
    for(var i = 0; i < 32; i += 1){
        output <<= 1;
        output |= n & 1;
        n >>>= 1;
    }
    return output >>> 0;
};

/*
Since we know that it should be 32 bits, let's create a loop with 32 iterations.
r <<= 1 provide a place for the next bit, e.g. 1 << 1 = 10, 10 << 1 = 100, and so on.
r |= n & 1 dicide if last bit is 0 or 1
n >>>= 1 discard right most bit of provided number since it was applied

Last line return r >>> 0 just converts resulted bits into unsigned representation.
*/