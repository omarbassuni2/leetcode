/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const hashMap = {};
    strs.forEach((str) => {
        const sorted = str.split("").sort().join("");
        if(hashMap[sorted])     hashMap[sorted].push(str);
        else                    hashMap[sorted] = [str];
    })
    return Object.values(hashMap)
};