/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length % 2 != 0)   return false;
    const stack = [];
    const hashTable = {
        ')': '(', 
        '}': '{',
        ']': '[',
    };
    for(var i = 0; i < s.length; i += 1){
        if(s[i] == '(' || s[i] == '[' || s[i] == '{')   stack.push(s[i]);
        else{
            if(stack.pop() === hashTable[s[i]]) continue;
            else    return false;
        }
    }
    return stack.length == 0 ? true : false;
};