/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length == 0)    return "";
    let baseStr = strs[0];
    for(var i = 0; i < strs.length; i += 1){
        if(baseStr == strs[i].slice(0, baseStr.length))    continue;
        else{
            for(var j = 0; j < baseStr.length; j += 1){
                const tempStr = strs[i];
                if(baseStr[j] != tempStr[j]){
                    if(j == 0)  return "";
                    else{
                        baseStr = baseStr.slice(0, j);
                    }
                }
            }
        }
    }
    return baseStr;
};