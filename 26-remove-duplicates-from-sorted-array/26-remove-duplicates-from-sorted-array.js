/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let globalLastVar = -101;
    for(var i = 0; i < nums.length; i += 1){
        let localLastVar = globalLastVar;
        globalLastVar = nums[i];
        if(nums[i] == localLastVar){
            nums.splice(i, 1);
            i-=1;
        }
    }
};