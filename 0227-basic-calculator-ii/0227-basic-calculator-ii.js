/**
 * @param {string} s
 * @return {number}
 */

/*  Have a variable operand that starts off as + because all strings will start as positive 
    We can have numbers with multiple digits.
    If s[i] is a digit append it to currNum
    If Its not a digit or we reach the end of our string we do the following:-
        - If the operator is * or / we pop from the stack and do the operation using popped and currNum and push to the stack
        - else if the operator is + or -  we add the number with its sign to the stack
    after all of that we reset currNum and update operand to be curr
    Now we have finished all * and /, we want to finish + and  - before return the value
*/
var calculate = function (s) {
    s = s.replaceAll(' ', '');
    const stack = [];
    let currNum = '', operand = '+'; // All strings will start with a positive number
    for(let i = 0; i < s.length; i += 1) {
        if(!isNaN(s[i])) currNum += s[i];
        if(isNaN(s[i]) || i === s.length - 1) {
            if(operand === '+')     stack.push(+currNum);
            if(operand === '-')     stack.push(-currNum);
            if(operand === '*')     stack.push(stack.pop() * currNum);
            if(operand === '/')     stack.push(Math.trunc(stack.pop() / currNum));
            operand = s[i], currNum = ''; 
        }
    }
    return stack.reduce((total, curr) => total + curr, 0);
};