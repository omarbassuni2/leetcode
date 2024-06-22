/**
 * @param {string} s
 * @return {string}
 */
/*
    There are 2 tricks here is: having numbers bigger than one digit and strings when popped get reversed
*/ 
var decodeString = function(s) {
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== ']') {
            stack.push(s[i]);
        } else {
            let tempStr = '';
            while (stack[stack.length - 1] !== '[') {
                tempStr = stack.pop() + tempStr;
            }
            stack.pop(); // Remove '['
            
            let num = '';
            while (stack.length && !isNaN(stack[stack.length - 1])) {
                num = stack.pop() + num;
            }
            stack.push(tempStr.repeat(Number(num)));
        }
    }
    
    return stack.join('');
};