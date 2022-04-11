/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const chosenList = [];
    for(var i = 0; i < nums.length - 1; i += 1){
        for(var j = nums.length - 1, k = i + 1; j > i; j -= 1, k += 1){
            if(nums[i] + nums[k] == target){
                chosenList.push(i);
                chosenList.push(k);
                break;
            }
            if(nums[i] + nums[j] == target){
                chosenList.push(i);
                chosenList.push(j);
                break;
            }
            if(i == k || i == j) break; 
        }
    }
    return chosenList;
};