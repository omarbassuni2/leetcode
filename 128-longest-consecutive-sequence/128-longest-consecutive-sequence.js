/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(nums.length == 0)    return 0;
    let longestConsectiveNum = 0;
    const setOfNums = new Set(nums);
    nums.forEach((num)=>{
        if(!setOfNums.has(num - 1)){
            let lengthToAdd = 0;
            while(setOfNums.has(num + lengthToAdd)){
                lengthToAdd += 1;
            }
            longestConsectiveNum = Math.max(longestConsectiveNum, lengthToAdd);
        }
    })
    return longestConsectiveNum; 
};