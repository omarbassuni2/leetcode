/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const output = [];
    function backtracking(current, openBrackets, closedBrackets){
        if(current.length == 2 * n){
            output.push(current.slice());
            return;
        }
        if(openBrackets < n){
            current += '(';
            backtracking(current, openBrackets + 1, closedBrackets);
            current = current.slice(0, -1);
        }
        if(closedBrackets < openBrackets){
           current += ')';
            backtracking(current, openBrackets, closedBrackets + 1);
            current = current.slice(0, -1);
        }
    }
    backtracking([], 0, 0);
    return output;
};