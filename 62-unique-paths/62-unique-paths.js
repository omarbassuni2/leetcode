/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    var memoization = [];
    for(var i = 0; i < m; i+=1) {
        memoization[i] = new Array(n).fill(0);
        memoization[i][n - 1] = 1;
        if(i == m - 1)  memoization[i] = new Array(n).fill(1);
    }
    for(var i =  m - 2; i >= 0; i -= 1){
        for(var j = n - 2; j >= 0; j -= 1){
            memoization[i][j] = memoization[i][j + 1] + memoization[i + 1][j];
        }
    }
    return memoization[0][0];
};