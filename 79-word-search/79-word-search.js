/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const visited = new Set();
    function backtracking(row, col, pointer){
        if(pointer == word.length)  return true;
        if(row < 0 || row >= board.length || col < 0 || col >= board[0].length || 
           board[row][col] != word[pointer] || visited.has([row, col].toString()))     return false;
        visited.add([row, col].toString());
        const isExist = (backtracking(row, col + 1, pointer + 1) || backtracking(row, col - 1, pointer + 1) ||
               backtracking(row + 1, col, pointer + 1) ||  backtracking(row - 1, col, pointer + 1));
        visited.delete([row, col].toString());
        return isExist;
    }
    
    for(var i = 0; i < board.length; i += 1){
        for(var j = 0; j < board[0].length; j += 1){
            if(board[i][j] == word[0] && backtracking(i, j, 0)) return true;
        }
    }
    return false;
};