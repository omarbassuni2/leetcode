/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    let last = 0
    let first = 1;
    for (let i=s.length-1; i>=0; i--) {
        if (s[i] === "0") {
            last = first;
            first = 0;
        } else {
            const tmp = first;   
            if (s[i] === "1" || (s[i] === "2" && s[i+1] && "0123456".includes(s[i+1]))) {
                first += last;
            }
            last = tmp;
        }
        
    }
    
    return first
};