/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    const hashMap = new Map();
    for(var i = 0; i < s1.length; i += 1){
        let current = hashMap.get(s1[i]) || 0;
        hashMap.set(s1[i], current + 1);
    }
    let mapSize = s1.length;
    for(var i = 0; i < s2.length; i += 1){
        if(hashMap.get(s2[i])){
            let tempMap = new Map(hashMap);
            let counter;
            for(var j = i; j < i + mapSize; j += 1){
                if(tempMap.get(s2[j]) && tempMap.get(s2[j]) > 0){
                    let current = tempMap.get(s2[j]);
                    tempMap.set(s2[j], current - 1);
                }else{
                    counter = j - i;
                    break;
                }
            }
            let output = true;
            for(const [key, value] of tempMap){
                if(value != 0)  output = false;
            }
            if(output)  return output;
        }
    }
    return false;
};