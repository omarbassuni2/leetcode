/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var str = x.toString();
    for(var i = 0, j = str.length - 1; i < str.length; i += 1, j -= 1){
        if(i === j)  return true;
        if(str[i] !== str[j])    return false;
        if(j - i === 1)  return true;
    }
};