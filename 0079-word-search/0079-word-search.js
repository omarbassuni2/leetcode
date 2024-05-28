/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

var exist = function(board, word) {
    const rowsLen = board.length, colsLen = board[0].length;
    function dfs(row, col, wordIndex) {
        if(wordIndex === word.length)   return true;
        if(row < 0 || col < 0 || row >= rowsLen|| col >= colsLen || board[row][col] !== word[wordIndex]) {
           return false;
        }
        const temp = board[row][col];
        board[row][col] = undefined;
        const result =  
            dfs(row - 1, col, wordIndex + 1) ||
            dfs(row + 1, col, wordIndex + 1) ||
            dfs(row, col - 1, wordIndex + 1) ||
            dfs(row, col + 1, wordIndex + 1)
        
        board[row][col] = temp;
        return result;
    }
    for(let i = 0; i < rowsLen; i += 1) {
        for(let j = 0; j < colsLen; j += 1) {
            if(board[i][j] === word[0] && dfs(i, j, 0)) return true;
        }
    }
    return false;
    
    
};