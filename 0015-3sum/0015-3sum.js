/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/*
    The idea is to sort the input. loop over the array, if the nums[i] === nums[i - 1] then continue;
    now use two pointers on the rest of the array. 
    If sum bigger than 0, decrease right
    If sum less   than 0, increase left
    else          add the three numbers to the output. increase left by one. use a while loop to check if left equals prev left, to                     increase a new one 
*/
var threeSum = function(nums) {
    const output = [];
    nums = nums.sort((a,b) => a-b);
    for(let i = 0; i < nums.length; i += 1) {
        if( i > 0 && nums[i] === nums[i - 1]) continue;
        let l = i + 1, r = nums.length - 1;
        while(l < r) {
            const sum = nums[i] + nums[l] + nums[r];
            if(sum === 0) {
                output.push([nums[i], nums[l], nums[r]]);
                l += 1;
                while(nums[l] === nums[l - 1] && l < r)  l += 1;
            } 
            else if(sum > 0)  r -= 1; 
            else              l += 1;
        }
    }
    return output;
};