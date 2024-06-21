/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    const sStack = [], tStack = [];
    for(const char of s.split("")) {
        if(char === '#')    sStack.pop();
        else                sStack.push(char);
    }
    for(const char of t.split("")) {
        if(char === '#')    tStack.pop();
        else                tStack.push(char);
    }
    return sStack.toString() === tStack.toString();
};