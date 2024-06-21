/**
 * @param {string[]} tokens
 * @return {number}
 */

/*
    The idea is to use another stack to push and pop from. You should push until you counter a sign, then you should 
    pop the last two elements and use that operation on them. Another trick here is truncating towards zero, You use floor for              positive division and ceil for negative divisions  

*/

var evalRPN = function(tokens) {
    const stack = [], set = new Set(['*', '/', '+', '-']);
    for(let i = 0; i < tokens.length; i += 1) {
        if(!set.has(tokens[i])) {
            stack.push(tokens[i]);
            continue;
        } 
        const operand2 = Number(stack.pop()), operand1 = Number(stack.pop());
        let res;
        if(tokens[i] === '*') res = operand1 * operand2;
        if(tokens[i] === '/') res = operand1 / operand2 > 0 ? Math.floor(operand1 / operand2) : Math.ceil(operand1 / operand2);
        if(tokens[i] === '+') res = operand1 + operand2;
        if(tokens[i] === '-') res = operand1 - operand2;
        stack.push(res);
    }
    return stack.pop();
};