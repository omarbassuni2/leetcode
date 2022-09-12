/**
 * @param {character[][]} board
 * @return {boolean}
 */
var squareIndexes = function(i, j){
    const limits = [0, 3, 6, 9];
    let colIndex = i, rowIndex = j;
    for(var i = 1; i < 4; i += 1){
        if(colIndex < limits[i] && colIndex >= limits[i - 1])   colIndex = i - 1;
        if(rowIndex < limits[i] && rowIndex >= limits[i - 1])   rowIndex = i - 1;

    }
    return { colIndex, rowIndex };
}
var isValidSudoku = function(board) {
    const miniSquareMap = {};         //[0, 1, ...8]; each entry has
    for(var i = 0; i < 3; i += 1){
        for(var j = 0; j < 3; j += 1)   miniSquareMap[[i, j]] = new Set();
    }
    //check if rows have duplicates
    for(var i = 0; i < board.length; i += 1){
        const visitedSet = new Set();
        for(var j = 0; j < board[0].length;j += 1){
            if(board[i][j] == '.')  continue;
            if(visitedSet.has(board[i][j])){
                return false;
            }
            else                                visitedSet.add(board[i][j]);

            const { colIndex, rowIndex } = squareIndexes(i, j);
            if(miniSquareMap[[colIndex, rowIndex]].has(board[i][j])){
                return false;
            }
            else                                                        miniSquareMap[[colIndex, rowIndex]].add(board[i][j]);
        }
    }
    
    //check if cols have duplicates
    for(var i = 0; i < board[0].length; i += 1){
        const visitedSet = new Set();
        for(var j = 0; j < board.length; j += 1){
            if(board[j][i] == '.')  continue;
            if(visitedSet.has(board[j][i])){
                return false;
            }
            else                                visitedSet.add(board[j][i]);
        }
    }
    
    return true;
};