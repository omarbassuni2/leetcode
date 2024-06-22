/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
/*
    The trick is to use a Monotic stack. Its conditions should be the element to be pushed must be negative and the last element in the     stack has to be positive, in order to collide. When these conditions are met, we check for absolute value and which one is bigger       and update toBePushed accordingly
*/
var asteroidCollision = function(asteroids) {
    const stack = [];
    for(let i = 0; i  < asteroids.length; i += 1) {
        let toBePushed = asteroids[i];
        while(stack.length && toBePushed < 0 && 0 < stack[stack.length - 1]) {
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