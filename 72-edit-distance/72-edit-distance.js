/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    if(word1.length == 0)   return word2.length;
    if(word2.length == 0)   return word1.length;
    const dp = new Array(word1.length + 1).fill(0).map(() => new Array(word2.length + 1).fill(0));
    for(var i = 0; i <= word1.length; i += 1){
        dp[i][word2.length] = word1.length - i;
    }
    for(var i = 0; i <= word2.length; i += 1){
        dp[word1.length][i] = word2.length - i;
    }
    for(var i = word1.length - 1; i >= 0; i -=1){
        for(var j = word2.length - 1; j >= 0; j -=1){
            if(word1[i] != word2[j])    dp[i][j] = 1 + Math.min(dp[i + 1][j + 1], dp[i][j + 1], dp[i + 1][j]);
            else    dp[i][j] = dp[i + 1][j + 1];
        }
    }
    return dp[0][0];
};