/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let output = [-1, -1];
    if(nums.length == 0)    return output;
    let left = 0, right = nums.length - 1, mid = Math.ceil((left + right) / 2);
    while(left <= right){
        if(nums[mid] == target){
            output = [mid, mid];
            if(nums[mid] == nums[mid + 1] || nums[mid] == nums[mid - 1]){
                let tempMid = mid, tempLeft = mid - 1, tempRight = mid + 1;
                while(nums[mid] == nums[tempLeft] || nums[mid] == nums[tempRight]){
                    if(nums[tempLeft] == nums[mid]){
                        output[0] = tempLeft;
                        tempLeft -= 1;
                    }else if(nums[tempRight] == nums[mid]){
                        output[1] = tempRight;
                        tempRight += 1;
                    }
                }
            }
            return output;
        }
        else if(nums[mid] <= target){
            left = mid + 1;
        }
        else{
            right = mid - 1;
        }
        mid = Math.ceil((left + right) / 2);
    }
    return output;
};