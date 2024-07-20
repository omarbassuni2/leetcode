/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    const sStack = [], tStack = [];
    s.split("").forEach((char) => {
        if(char !== '#') sStack.push(char);
        else               sStack.pop();
    });
    t.split("").forEach((char) => {
        if(char !== '#') tStack.push(char);
        else             tStack.pop();
    });
    return sStack.toString() === tStack.toString();
};