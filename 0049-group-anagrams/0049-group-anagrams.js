/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const hashMap = new Map();
    strs.forEach((ele) => {
        const sortedWord = ele.split("").sort().join("");
        if(hashMap.has(sortedWord))     hashMap.set(sortedWord, [...hashMap.get(sortedWord), ele]);
        else    hashMap.set(sortedWord, [ele]);
    });
    const output = [];
    for (const value of hashMap.values()) {
      output.push(value);
    };
    return output;
};