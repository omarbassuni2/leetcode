/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let startIndex = 0;
    let minArrLen = Infinity;
    let sum = 0;
    while(startIndex < nums.length){
        for(let i = startIndex; i < nums.length; i += 1){
            sum += nums[i];
            if(sum >= target){
                const currMinLen = i - startIndex + 1;
                minArrLen = Math.min(minArrLen, currMinLen);
                sum = 0;
                break;
            }
        }
        sum = 0;
        startIndex += 1;
    }
    return (minArrLen == Infinity ? 0 : minArrLen);
};