/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    let map = new Map();
    for(var i = 0; i < mat.length; i += 1){
        let numOfSoliders = mat[i].reduce((a,b) => {return a + b});
        map.set(i, numOfSoliders);
    }
    map = [...map.entries()].sort((a,b) => {return a[1]-b[1]});
    const output = [];
    for(var i = 0; i < k; i += 1){
        output.push(map[i][0]);
    }
    return output;
};