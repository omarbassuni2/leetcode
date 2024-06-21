/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length % 2 !== 0)  return false;
    // The idea is to search for the opening to start an operation and a closing to finish the operation
    const stack = [], openingMap = {
        '{': '}', '[': ']', '(': ')' 
    };
    for(let i = 0; i < s.length; i += 1) {
        if(s[i] in openingMap) {
            stack.push(s[i]);
        } else {
            if(openingMap[stack.pop()] !== s[i])    return false;
        }
    }
    return !stack.length;
};