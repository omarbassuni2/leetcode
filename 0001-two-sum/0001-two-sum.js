/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const hashMap = {};
    nums.forEach((ele, index) => {
        if(hashMap[ele])        hashMap[ele] = [...hashMap[ele], index];
        else                    hashMap[ele] = [index];
    });
    for(var i = 0; i < nums.length; i += 1){
        let secondNum = target - nums[i];
        if(hashMap[secondNum] && hashMap[secondNum][0] != i)     return [i, hashMap[secondNum][0]];
        else if(hashMap[secondNum] && hashMap[secondNum][0]  == i && hashMap[secondNum].length > 1){
            return [i, hashMap[secondNum][1]]
        }
        else    continue
    }
};