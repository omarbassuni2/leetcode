/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let k = 0;
    for(let i = 0; i < nums.length; i += 1){
        if(nums[i] != val){
            nums[k] = nums[i];
            k += 1;
        }
    }
    console.log(k);
    return k;
};