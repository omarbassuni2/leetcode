/**
 * @param {string} s
 * @return {string[]}
 */
const isLetter = /[a-zA-Z]/i;
var letterCasePermutation = function(s) {
    if(s.length === 0) return [""];    
    if(!isLetter.test(s)) return [s];
    
    const first = s[0];
    const permutations = letterCasePermutation(s.slice(1));
    
    const total = [];
    for(let perm of permutations) {
        total.push(first + perm);
		// String.fromCharCode(first.charCodeAt(0)  ^ 32) toggles char case: a -> A, A -> a
        if(isLetter.test(first)) total.push(String.fromCharCode(first.charCodeAt(0)  ^ 32) + perm);
    } 
    
    return total;
};