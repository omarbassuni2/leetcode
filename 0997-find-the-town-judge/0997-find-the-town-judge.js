/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
  n = 2, trust = [[1,2]]
  n = 3, trust = [[1,3],[2,3]]
  n = 3, trust = [[1,3],[2,3],[3,1]]
 */
/* The idea is to have an array n + 1, with each index corresponds to each person. 
    The array is n + 1 because town's people index starts with one not zero
    If a person trusts someone, decrement it by one.
    If a person is trusted by someone by someone increment by one.
    then return the index of the element that has n - 1 people trusting him 
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