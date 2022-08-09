/**
 * @param {number[]} arr
 * @return {number}
 */
var numFactoredBinaryTrees = function(arr) {
    const hashMap = {};
    let output = 0;
    arr = arr.sort((a, b) => a - b);
    arr.forEach((ele) => {
        hashMap[ele] = 1;
    });
    for(var i = 0; i < arr.length; i += 1){
        let val = 1;
        for(var j = 0; j < i; j += 1){
            let division = arr[i] / arr[j];
            if(division in hashMap){
                val += (hashMap[division] * hashMap[arr[j]]);
            }
        }
        output += val;
        hashMap[arr[i]] = val;
    }
    return output % (10 ** 9 + 7);
};