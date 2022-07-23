/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    const hashTable = {};
    const output = [];
    for(var i = 0; i < p.length; i += 1){
        if(p[i] in hashTable)   hashTable[p[i]] += 1;
        else    hashTable[p[i]] = 1;
    }
    let window = '';
    for(var i = 0; i < s.length; i += 1){
        if(s[i] in hashTable)   window += s[i];
        else    window = '';
        if(window.length == p.length){
            const tempTable = Object.assign({}, hashTable);
            let isAnagram = true;
            for(var j = 0; j < window.length; j += 1){
                tempTable[window[j]] -= 1;
                if(tempTable[window[j]] < 0)    isAnagram = false;
            }
            if(isAnagram)   output.push(i - window.length + 1);
            window = window.slice(1); //remove first char
        }
    }
    return output
};