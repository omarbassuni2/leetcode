/**
 * @param {string} palindrome
 * @return {string}
 */
var breakPalindrome = function(palindrome) {
    if(palindrome.length == 1)  return "";
    let biggestChar = 'a', index = -1;
    var checkPalindrome = function(str){
        let left = 0, right = str.length - 1;
        while(left <= right){
            if(str[left] != str[right])     return false;
            left += 1, right -= 1;
        }
        return true;
    }
    for(var i = 0; i < palindrome.length; i += 1){
        if(palindrome[i] != 'a'){
            const temp = palindrome.slice(0, i) + 'a' + palindrome.slice(i + 1);
            if(!checkPalindrome(temp))   return temp;
        }
    }
    return palindrome.slice(0, palindrome.length - 1) + 'b';
};