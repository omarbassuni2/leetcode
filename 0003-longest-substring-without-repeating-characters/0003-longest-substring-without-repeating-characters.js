/**
 * @param {string} s
 * @return {number}
 */
// "pwwkew"
/* 
    The idea is to have a left and right indexes and use the for loop to add to map's counter.
    If map[right] > constraint, we use a while loop until the map[right] is less than constraint,
    we move the left pointer and decrement until the condition is set straight 
*/
var lengthOfLongestSubstring = function(s) {
    if(s.length < 2)   return s.length;
    let max = 0, left = 0;
    const map = {};
    for(let right = 0; right < s.length; right += 1) {
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