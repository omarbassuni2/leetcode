/**
 * @param {string} s
 * @return {string}
 */
// "3[a]2[bc]"
var decodeString = function(s) {
    const stack = [];
    for(let i = 0; i < s.length; i += 1) {
        if(s[i] !== ']') stack.push(s[i]);
        else {
            let tempStr = '',  popped = stack.pop();
            while(popped !== '[') {
                tempStr = popped + tempStr;
                popped = stack.pop();
            }
            let regex = new RegExp(/^[0-9]/), nPopped = stack.pop(), n = '';
            while(regex.test(nPopped)) {
                n = nPopped + n;
                nPopped = regex.test(stack[stack.length - 1]) ? stack.pop() : undefined;
            }
            let str = '';
            for(let j = 0; j < n; j += 1) {
                str += tempStr;
            }
            stack.push(str);
        }
    }
    return stack.join("");
};