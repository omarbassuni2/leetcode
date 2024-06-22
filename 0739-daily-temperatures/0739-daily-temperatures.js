/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    /* 
        The idea is to use Monotic Stack. You push to the stack, then check If the last element meets a certain constraint using a             while loop. And when you store the elements in the stack store each element as [temp, index]
    */
    const output = new Array(temperatures.length).fill(0), stack = [];
    for(let i = 0; i < temperatures.length; i += 1) {
        while(stack.length && stack[stack.length - 1][0] < temperatures[i]) {
            const [temp, index] = stack.pop();
            output[index] = i - index;
        }
        stack.push([temperatures[i], i]);
    }
    return output
};