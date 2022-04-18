/**
 * @param {number} n
 * @return {number}
 */
const memoize = [];
var fib = function(n) {
    if(n < 2) return n;
    if(memoize[n]) return memoize[n];
    memoize[n] = fib(n - 1) + fib(n - 2);
    return memoize[n];
};