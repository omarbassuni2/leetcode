/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let hashTable = {};
    let longestSubStr = 0;
    let str = '';
    const arrOfSubStrings = [];
    for(var i = 0; i < s.length; i += 1){
        if(s[i] in hashTable){
            console.log(longestSubStr, i , s[i]);
            const removeBeforeIndex = hashTable[s[i]];
            str = s.slice(removeBeforeIndex, i);
            for(property in hashTable){
              if(hashTable[property] <= removeBeforeIndex){
                  delete hashTable[property];
              }
            }
            hashTable[s[i]] = i;
        }else{
            str += s[i];
            hashTable[s[i]] = i;
        }
    longestSubStr = (str.length > longestSubStr) ? str.length : longestSubStr;
    }
    if(s.length != 0 && longestSubStr == 0){
        return s.length;
    }
    return longestSubStr;
};