/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
/*
    The trick here how to speed up the function and not exceed limits. So, if n % 2 === 0 we should call myPow with x*x and n/2
    and If n < 0 we should return its inverse to be 1 divided by myPow(x, -n) => now we can get the power normally, and we reverse it after it finished
*/
var myPow = function(x, n) {
    if(n == 0)              return 1;
    else if(n < 0)          return 1 / myPow(x, -n);
    else if(n % 2 == 0)     return myPow(x * x, n / 2);
    else                    return x * myPow(x, n - 1);
    
};