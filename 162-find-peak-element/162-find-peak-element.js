/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    if(nums.length == 1)    return 0;
    let left = 0, right = nums.length - 1, mid;
    while(left <= right){
        mid = Math.ceil((left + right) / 2);
        let rightVariable = nums[mid + 1] || -Infinity;
        let leftVariable = nums[mid - 1] || -Infinity;
        if(nums[mid] > leftVariable && nums[mid] > rightVariable){
            return mid;
        }
        let directionOfArr = leftVariable >= rightVariable ? true : false;
        if(directionOfArr){     //left part has a bigger number
            right = mid - 1;
        }else   left = mid + 1;
    }
};