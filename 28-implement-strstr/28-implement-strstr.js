/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(needle == '')    return 0;
    const len = needle.length;
    const firstChar = needle[0];
    let index = -1;
    for(var i = 0; i < haystack.length; i += 1){
        if(haystack[i] == firstChar){
            if(haystack.slice(i, i + len) == needle){
                return i;
            }
        }
    }
    return index;
};