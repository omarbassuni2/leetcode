/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if(x === 0) return x;
    let position = 0, isNegative = x < 0;
    isNegative && (x = -1 * x);
    let temp  = x;
    while(temp > 0) {
        position += 1;
        temp = Math.floor(temp / 10);
    }
    let output = 0;
    while(position > 0) {
        const remainder = x % 10;
        x = Math.floor(x / 10);
        output += remainder * Math.pow(10, position - 1);
        position -= 1;
    }
    if(output > 2147483647) return 0;
    return  (isNegative ? output * - 1 : output);
};