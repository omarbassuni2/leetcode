/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length <= 1)  return s.length;
    let hashMap = {}, left = 0, max = 0;
    for(let i = 0; i < s.length; i += 1) {   
        if(hashMap[s[i]] === undefined)  {
            hashMap[s[i]] = i;
        } else {
            max = Math.max(max, i  - left);    // check on aa
            left = Math.max(hashMap[s[i]] + 1, left);
            hashMap[s[i]] = i;
        }
    }
    return Math.max(max, s.length - left);
};