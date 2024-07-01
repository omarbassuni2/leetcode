/**
 * @param {number} n
 * @return {number}
 */
// [0, 1, 2, 3, 4]
// [0, 1, 2, 3, 5] 

// The trick here is similiar to fib sequence, we add the last two numbers together
var climbStairs = function(n) {
    if(n <= 3)   return n;
    let first = 0, second = 1, res;
    for(let i = 1; i <= n; i += 1) {
        res = first + second;
        first = second;
        second = res;
    }
    return res;
};