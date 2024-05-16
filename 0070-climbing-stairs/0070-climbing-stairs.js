/**
 * @param {number} n
 * @return {number}
 */
const map = {
    1: 1,
    2: 2
}
var climbStairs = function(n) {
    if(map[n]) return map[n];
    map[n] = climbStairs(n - 1) + climbStairs(n - 2);
    return map[n];
};