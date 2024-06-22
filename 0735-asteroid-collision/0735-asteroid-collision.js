/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    const stack = [];
    for(let i = 0; i  < asteroids.length; i += 1) {
        let toBePushed = asteroids[i];
        while(stack.length && (stack[stack.length - 1] * toBePushed) < 0 && toBePushed < 0) {
            const popped = stack.pop(), first = Math.abs(popped), second = Math.abs(toBePushed);
            if(first === second) toBePushed =  undefined;
            else {
                toBePushed = first > second ? popped : toBePushed;
            }
        }
        if(toBePushed)  stack.push(toBePushed);
    }
    return stack;
};