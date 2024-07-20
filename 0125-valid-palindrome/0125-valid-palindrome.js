/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.replaceAll(/[^a-zA-Z0-9]/g, "").toLowerCase();
    let left = 0, right = s.length - 1;
    while(left <= right) {
        if(s[left] !== s[right])     return false;
        right -= 1, left += 1;
    }
    return true;
};