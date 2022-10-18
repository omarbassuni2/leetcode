/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if(n == 1)  return '1';
    let output = '';
    const dp = new Array(n - 1);
    dp[0] = '1';
    for(var i = 1; i < n; i += 1){
        const prevStr = dp[i - 1];
        let tempStr = '', prevNum = prevStr[0], prevCounter = 1;
        for(var j = 1; j <= prevStr.length; j += 1){
            if(prevStr[j] == prevNum)  prevCounter += 1;
            else{
                tempStr += `${prevCounter}${prevNum}`;
                prevNum = prevStr[j], prevCounter = 1;
            }
        }
        dp[i] = tempStr;
    }
    return dp[n - 1];
};