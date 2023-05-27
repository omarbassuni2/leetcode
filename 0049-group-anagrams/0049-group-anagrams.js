/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const strsMap = {};
    strs.forEach((str) => {
        const sortedStr = str.split("").sort();
        strsMap[sortedStr] ? strsMap[sortedStr].push(str) : strsMap[sortedStr] = [str];
    });
    return Object.values(strsMap);
};