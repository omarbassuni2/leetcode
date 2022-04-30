/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = function(nums) {
    const output = [];
    nums.sort(function(a,b){return a-b})
    for(var i = 0; i < nums.length; i += 1){
        if(i > 0 && nums[i] == nums[i - 1]) continue;
        var l = i + 1;
        var r = nums.length - 1;
        while(l < r){
            const sum = nums[i] + nums[l] + nums[r];
            if(sum > 0) r -= 1;
            else if(sum < 0)    l += 1;
            else{
                output.push([nums[i], nums[l], nums[r]]);
                l += 1;
                while(nums[l] == nums[l - 1] && l < r)  l += 1;
            }
        }
    }
    return output;
};