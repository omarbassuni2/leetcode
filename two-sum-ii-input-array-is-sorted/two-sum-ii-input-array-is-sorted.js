/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let l = 0;
    let r = numbers.length - 1;
    let output = [];
    while(l < r){
        const sum = numbers[l] + numbers[r];
        if(sum == target)   return [l + 1, r + 1];
        else if(sum < target){
            l += 1;
        }else   r -= 1;
    }
};