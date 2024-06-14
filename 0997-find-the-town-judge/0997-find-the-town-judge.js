/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
  n = 2, trust = [[1,2]]
  n = 3, trust = [[1,3],[2,3]]
  n = 3, trust = [[1,3],[2,3],[3,1]]
 */
var findJudge = function(n, trust) {
    if(n === 1) return 1;
    // To start from position 1 instead of 0
    let trustCounter = new Array(n + 1).fill(0);
    // count number of trusts in a new array
    for (const [a, b] of trust) {
        trustCounter[a] -= 1;
        trustCounter[b] += 1;
    }
    return trustCounter.indexOf(n - 1); // Return the index of the person who has n - 1 people trust him
};