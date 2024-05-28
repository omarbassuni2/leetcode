/**
 * @param {string} s
 * @return {number}
 */
/*
https://leetcode.com/problems/decode-ways/discuss/4454173/Recursive-Top-Down-Bottom-Up-Clean-and-Commented-Code-Dynamic-Programming
*/
var numDecodings = function(s) {
    const dp = new Array(s.length + 1).fill(0);
    dp[s.length] = 1;
    for(let i = s.length - 1; i >= 0; i -= 1) {
        if(s[i] === '0')    continue;
        dp[i] = dp[i + 1];
        if(s[i] + s[i+1] <= 26)    dp[i] += dp[i + 2];
    }
    return dp[0];
};