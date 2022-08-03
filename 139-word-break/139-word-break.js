/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const memo = {}
    return isBreak(s)
    
    function isBreak(cs){
        if(cs.length === 0) return true
        if(cs in memo) return memo[cs]
        for(const word of wordDict){
            const end = word.length
            if(cs.startsWith(word) && isBreak(cs.slice(end))) return memo[cs] = true
        }
        return memo[cs] = false
    }
	// s = s.length, w = wordDict.length
    // O(sw) Time, since we are using memoization, we are avoid the duplicates computation
    // O(s) Space , maximum call stack can be the length of s when recursively runs every character of 's'
};