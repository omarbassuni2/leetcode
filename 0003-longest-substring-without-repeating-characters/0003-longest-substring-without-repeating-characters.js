/**
 * @param {string} s
 * @return {number}
 */
// "pwwkew"
var lengthOfLongestSubstring = function(s) {
    if(s.length < 2)   return s.length;
    let max = 0, left = 0;
    const map = { [s[left]] : 1};
    for(let right = 1; right < s.length; right += 1) {
        if(!(s[right] in map)) map[s[right]] = 0;
        map[s[right]] += 1;
        while(map[s[right]] > 1) {
            map[s[left]] -= 1;
            left += 1;
        }
        max = Math.max(max, right - left + 1);
    }
    return max;
};