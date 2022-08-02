/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let res = '', resLen = 0 , l , r;
    for(let i = 0; i < s.length; i++){
	// for odd length
        l = i, r = i;
        while( l >= 0 && r <= s.length && s[l] === s[r]){
            l--;
            r++
        }
       if((r - 1) - (l + 1) + 1 > resLen){
         res = s.slice(l + 1 , r)
         resLen = (r - 1) - (l + 1) + 1
       }
	   // for even length
         l = i, r = i + 1;
        while( l >= 0 && r <= s.length && s[l] === s[r]){
            l--;
            r++
        }
        if((r - 1) - (l + 1) + 1 > resLen){
            res = s.slice(l + 1 , r)
            resLen = (r - 1) - (l + 1) + 1
          }
    }
    return res
};