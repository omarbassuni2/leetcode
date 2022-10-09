/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let output = 0;
    let minDiff = Infinity;
    nums = nums.sort(function(a,b) { return a-b;});
    for(var i = 0; i < nums.length - 2; i += 1){
        let left = i + 1, right = nums.length - 1;
        while(left < right){
            const comparator = nums[i] + nums[left] + nums[right];
            const base = target;
            const diff = Math.abs(base - comparator);
            if(diff < minDiff){
                output = nums[i] + nums[left] + nums[right];
                minDiff = diff;
            }
            if(base == comparator){
                return comparator;
            }
            else if(base > comparator)      left += 1
            else    right -= 1;
        }
    }
    return output;
};