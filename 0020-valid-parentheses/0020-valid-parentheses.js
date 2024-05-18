/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length % 2 !== 0)  return false;
    const map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    const stack = [];
    for(let i = 0; i < s.length; i += 1) {
        if(map[s[i]]) {
            stack.push(s[i]);
        } else if(!map[s[i]] && s[i] !== map[stack.pop()]) {
            return false;
        }
    }
    return !stack.length;
};