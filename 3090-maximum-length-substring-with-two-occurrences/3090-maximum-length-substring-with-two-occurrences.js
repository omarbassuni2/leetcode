/**
 * @param {string} s
 * @return {number}
 */
var maximumLengthSubstring = function(s) {
    /*
    The idea is have a left and right indexes. And have a map with char and       
    its frequency when map[right] exceeds the constraint frequency, we use a       
    while loop starting from left until the char at map[right] is equal to 2 again
    */
    let left = 0, max = 0;
    const counterMap = {};
    for(let right = 0; right < s.length; right += 1) {
        if(!(s[right] in counterMap))  counterMap[s[right]] = 0;
        counterMap[s[right]] += 1;
        while(counterMap[s[right]] > 2) {
            counterMap[s[left]] -= 1;
            left += 1;
        }
        max = Math.max(max, right - left + 1);
    }
    return max;
};