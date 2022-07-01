/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let l = Math.clz32(n);
    let l2 = n.toString(2).length;
    let m = n.toString(2).padStart(l+l2,0).split("").reverse().join("");
    return parseInt(m, 2);
};