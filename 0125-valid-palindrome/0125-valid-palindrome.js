/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    let left = 0, right = s.length -1;
    while(left < right) {
        if(s[left] !== s[right])    return false;
        left += 1, right -= 1;
    }
    return true;
};