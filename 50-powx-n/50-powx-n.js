/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if(n == 0 || (x == -1 && n % 2 == 0))  return 1;
    if(n == 1 || x == 1 || x == -1)  return x;
    let isNegative = false;
    const multiplier = x;
    if(n < 0){
        n *= -1;
        isNegative = true;
    }
    while(n > 1){
        x *= multiplier;
        n -= 1;
    }
    
    return isNegative ? 1 / x : x;
};