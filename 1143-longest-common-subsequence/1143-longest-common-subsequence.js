/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    const matrix = new Array(text1.length + 1).fill(0);
    matrix.forEach((ele, i) => {
        matrix[i] = new Array(text2.length + 1).fill(0);
    })
    for(var i = 1;i < matrix.length; i += 1){
        for(var j = 1; j < matrix[0].length; j += 1){
            if(text1[i - 1] == text2[j - 1])    matrix[i][j] = 1 + matrix[i - 1][j - 1];
            else    matrix[i][j] = Math.max(matrix[i - 1][j], matrix[i][j - 1]);
        }
    }
    return matrix[text1.length][text2.length];
};