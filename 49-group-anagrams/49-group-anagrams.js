/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    if(strs.length == 0) return [[""]];
    const hashTable = {};
    for(var i = 0; i < strs.length; i += 1){
        let sortedStr = strs[i].split('').sort().join('');
        if(sortedStr in hashTable)  hashTable[sortedStr].push(strs[i]);
        else    hashTable[sortedStr] = [strs[i]];
    }
    const arr = Object.values(hashTable);
    return arr;
};