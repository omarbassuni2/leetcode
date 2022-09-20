/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    while (b !== 0) {
        let x = a;
        a = a ^ b;
        b = (x & b) << 1;
    }
    return a;
};