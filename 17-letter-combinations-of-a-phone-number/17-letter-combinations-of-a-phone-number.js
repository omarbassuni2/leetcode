/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(digits == "")    return [];
    const output = [];
    const hashTable = {
        '2': ['a','b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z']
    };
    backtrack = function(index, currStr){
        if(currStr.length == digits.length){
            output.push(currStr);
            return;
        }
        let arr = hashTable[digits[index]];
        for(var i = 0; i < arr.length; i += 1){
            backtrack(index + 1, currStr + arr[i]);
        }
    }
    backtrack(0, "");
    return output;
};