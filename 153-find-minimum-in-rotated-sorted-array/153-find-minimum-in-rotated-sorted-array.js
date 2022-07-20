/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let left = 0, right = nums.length - 1;
    let mid = Math.ceil((left + right) / 2);
    let leastNum = nums[mid];
    while(left <= right){
        if(nums[left] <= nums[mid]){ //left part is sorted & less than our mid 
            leastNum = Math.min(leastNum, nums[left]);
            left = mid + 1;
        }else{
            leastNum = Math.min(leastNum, nums[mid]);
            right = mid - 1;
        }
        mid = Math.ceil((left + right) / 2);
    }
    return leastNum;
};