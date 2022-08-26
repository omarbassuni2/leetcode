/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    const hashMap = {};
    let left = 0, output = 0, maxFreq = 0;
    for(var i = 0; i < s.length; i += 1){
        if(s[i] in hashMap)     hashMap[s[i]] += 1;
        else    hashMap[s[i]] = 1;
        maxFreq = Math.max(maxFreq, hashMap[s[i]]);
        while((i - left + 1) - maxFreq > k){
            hashMap[s[left]] -= 1;
            left += 1
        }
        output = Math.max(output, i - left  + 1);
    }
    return output;
};