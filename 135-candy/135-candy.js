/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    let output = 0;
    let outputArr = new Array(ratings.length);
    outputArr.fill(1);
    for(var i = 0; i < ratings.length; i += 1){
        let comparisonArr = [outputArr[i]];
        if(ratings[i] > ratings[i - 1] && outputArr[i] <= outputArr[i - 1])     comparisonArr.push(outputArr[i - 1]);
        if(ratings[i] > ratings[i + 1] && outputArr[i] <= outputArr[i + 1]){
            let counter = 0;
            let iter = 1;
            while(ratings[i + iter] > ratings[i + iter + 1]){
                counter += 1;
                iter += 1;
            }
            comparisonArr.push(outputArr[i + 1] + counter);
        }
        if(comparisonArr.length != 1)   outputArr[i] = Math.max(...comparisonArr) + 1;
    }
    outputArr.forEach((ele) => {
        output += ele;
    });
    return output;
};