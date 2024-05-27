/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x === 0) return 0;
    let left = 0, right = x;
    while(left <= right) {
        const mid = (left + right) / 2;
        const curr = mid ** 2;
        if(Math.floor(curr) === x)   return Math.floor(mid);
        else if(curr > x) {  // select left
            right  = mid;        
        } else {
            left = mid;
        }
    };
};