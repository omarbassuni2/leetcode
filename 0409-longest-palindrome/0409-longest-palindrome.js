/**
 * @param {string} s
 * @return {number}
 */
/*
"abccccdd"
*/
var longestPalindrome = function(s) {
    const map = {};
    let output = 0;
    s.split("").forEach((char) => {
        if(char in map) map[char] += 1;
        else            map[char] = 1;
    });
    Object.keys(map).forEach((char) => {
        if(output % 2 === 0)    output += map[char];
        else {
            output += map[char] % 2 === 0 ?  map[char] : map[char] - 1;
        }
    });
    return output;
};