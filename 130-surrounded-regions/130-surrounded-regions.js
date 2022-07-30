/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
        if (!board.length) return [];
    
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            // Only dfs if an 'O' and on the edge
            if (board[i][j] === 'O' && (i === 0 || i === board.length - 1 || j === 0 || j === board[0].length - 1)) {
                dfs(i, j);
            }
        }
    }
    
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === 'V') {
                board[i][j] = 'O';
            } else {
                board[i][j] = 'X';
            }
        }
    }
    
    return board;
    
    function dfs(r, c) {
        if (r < 0 || r >= board.length || c < 0 || c >= board[0].length || board[r][c] === 'X' || board[r][c] === 'V') {
            return;
        }
        
        board[r][c] = 'V';
        
        dfs(r + 1, c);
        dfs(r - 1, c);
        dfs(r, c - 1);
        dfs(r, c + 1);
    }
};