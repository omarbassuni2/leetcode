/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
        let obj={}
    for(let i in nums)
        obj[nums[i]] = obj[nums[i]]+1||1
    
    for(let i in obj){
        if(obj[i]==1) return i
    }
};