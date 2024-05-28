/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

var wordBreak = function(s, wordDict) {
    const memo = {};
    return recursion(s);
    function recursion(subString) {
        if(subString.length === 0)   return true;
        if(subString in memo) return memo[subString];
        for(const word of wordDict) {
            const end = word.length
            if(subString.startsWith(word) && recursion(subString.slice(end))) {
                return memo[subString] = true;
            }
        }
        return memo[subString] = false;
    }
};
