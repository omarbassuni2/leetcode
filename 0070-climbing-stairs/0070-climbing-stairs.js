/**
 * @param {number} n
 * @return {number}
 */
// [0, 1, 2, 3, 4]
// [0, 1, 2, 3, 5] 

// The trick here is similiar to fib sequence, we add the last two numbers together
const map = {
    1: 1,
    2: 2
}
var climbStairs = function(n) {
    if(map[n]) return map[n];
    map[n] = climbStairs(n - 1) + climbStairs(n - 2);
    return map[n];
};