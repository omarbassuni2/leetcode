/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let l = 0, r = nums.length - 1, output = [];
    while(l <= r){
        const leftVar = nums[l] ** 2;
        const rightVar = nums[r] ** 2;
        if(rightVar >= leftVar){
            output.push(rightVar);
            r -= 1;
        }else{
            output.push(leftVar);
            l += 1;
        }
    }
    return output.reverse();
};