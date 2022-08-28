/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    /*
    [3,4,5,1,2], -- 5 --, left is sorted, min is 3, go check the right arr
    [1,2]
    
    [4,5,6,7,0,1,2], -- 7--, left is sorted, min is 4, check right
    [0, 1, 2], -- 1 --, left is sorted, min is 0, check right 
    [2], -- 2 --, reached base case, min is 0;
    */
    let min = Infinity, left = 0, right = nums.length - 1;
    while(left <= right){
        const mid = Math.floor((left + right) / 2);
        if(nums[left] <= nums[mid]){    //left is sorted
            min = Math.min(min, nums[left]);
            left = mid + 1;
        }else{
            min = Math.min(min, nums[mid]) //might need to remove the + 1
            right = mid - 1;
        }
    }
    return min;
};